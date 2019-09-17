import { get, sortBy, uniq, minBy, maxBy } from 'lodash';

export default function getTracksFromSlots(slots) {
  // sort all slots by time
  const sortedSlots = sortBy(slots, 'startTime');

  // get track titles
  const trackTitles = uniq(slots.map(slot => get(slot, 'session.track.title.nb')));

  // iterate over the track titles and build tracks with slots
  const tracksWithSlots = trackTitles.map(title => {
    const slotsOnTrack = sortedSlots.filter(slot => get(slot, 'session.track.title.nb') === title);
    const { startTime } = minBy(slotsOnTrack, 'startTime');
    const { endTime } = maxBy(slotsOnTrack, 'endTime');

    return {
      title,
      startTime,
      endTime,
      data: slotsOnTrack,
    };
  });

  // sort the tracks by startTime, and then title
  return sortBy(tracksWithSlots, ['startTime', 'title']).map((track, index) => ({ ...track, index }));
}
