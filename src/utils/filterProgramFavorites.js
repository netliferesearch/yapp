export default function filterProgramFavorites(programs, favorites) {
  return programs.map(program => ({
    ...program,
    programArray: program.programArray.map(track => ({
      ...track,
    })),
  }));
}
