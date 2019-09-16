import { get, sortBy, uniq, minBy, maxBy } from 'lodash';

export default function getTracksFromSlots(slots) {
  const sortedSlots = sortBy(slots, 'startTime');

  const trackTitles = uniq(slots.map(slot => get(slot, 'session.track.title.nb')));

  return trackTitles.map((title, index) => {
    const slotsOnTrack = sortedSlots.filter(slot => get(slot, 'session.track.title.nb') === title);
    const { startTime } = minBy(slotsOnTrack, 'startTime');
    const { endTime } = maxBy(slotsOnTrack, 'endTime');

    return {
      index,
      title,
      startTime,
      endTime,
      data: slotsOnTrack,
    };
  });
}
