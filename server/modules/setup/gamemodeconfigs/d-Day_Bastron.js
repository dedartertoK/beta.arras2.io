let room =  [
[  "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1","bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1","bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1","bas1","bas1"],
[  "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1","bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1","bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1", "bas1","bas1","bas1"],
[  "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"],
[  "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"],
[  "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"],

[ "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"],
[  "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"],
[  "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"],
[  "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"],
[  "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"],
[  "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"],
[  "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"],
[  "norm", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall", "wall", "wall", "wall", "wall", "wall", "wal1", "wal1", "wall", "wall", "wall", "wall","wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall","norm"],
[  "norm", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "door", "norm","wall","norm"],
[  "norm", "wall", "wall", "wall", "door", "norm", "norm", "norm", "norm", "norm","wall", "wall", "norm", "norm", "wall", "wall", "norm", "wall", "norm", "wall", "wall", "wall","wall", "wall", "wall", "wall", "wall", "wall", "wall", "bas2","wall","norm"],
[  "norm", "wall", "bas2", "norm", "norm", "wall", "wall", "wall", "wall", "wall","norm", "norm", "norm", "wall", "norm", "wall", "norm", "wall", "norm", "norm", "wall", "wall","wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "norm"],
[  "norm", "wall", "wall", "wall", "wall", "norm", "norm", "norm", "norm", "norm","wall", "norm", "norm", "norm", "wall", "norm", "wall", "norm", "wall", "norm", "norm", "norm","norm", "norm", "norm", "wall", "wall", "wall", "wall", "wall","wall","norm"],
[  "norm", "wall", "wall", "norm", "wall", "norm", "wall", "wall", "norm", "norm","wall", "norm", "wall", "norm", "norm", "norm", "norm", "norm", "norm", "wall", "norm", "norm","wall", "wall", "norm", "norm", "norm", "wall", "norm", "wall","wall","norm"],
[  "norm", "wall", "wall", "norm", "wall", "wall", "norm", "wall", "wall", "norm","wall", "norm", "norm", "wall", "norm", "wall", "norm", "wall", "wall", "norm", "norm", "norm","norm", "wall", "norm", "norm", "norm", "norm", "norm", "wall","wall","norm"],
[  "norm", "wall", "wall", "norm", "norm", "norm", "norm", "wall", "norm", "wall","norm", "norm", "wall", "wall", "norm", "norm", "norm", "wall", "norm", "wall", "wall", "norm","norm", "norm", "wall", "wall", "wall", "norm", "norm", "wall","wall","norm"],
[  "norm", "wall", "wall", "norm", "wall", "wall", "norm", "norm", "norm", "wall","wall", "norm", "norm", "wall", "norm", "norm", "norm", "norm", "wall", "wall", "norm", "wall","norm", "norm", "norm", "norm", "wall", "wall", "norm", "wall","wall","norm"],
[  "norm", "wall", "wall", "norm", "norm", "wall", "wall", "norm", "norm", "norm","norm", "norm", "wall", "norm", "norm", "norm", "wall", "wall", "norm", "wall", "norm", "wall","norm", "wall", "wall", "norm", "wall", "wall", "norm", "wall","wall","norm"],
[  "norm", "wall", "wall", "norm", "norm", "wall", "wall", "wall", "wall", "wall","norm", "wall", "wall", "wall", "norm", "wall", "wall", "norm", "norm", "wall", "norm", "wall","norm", "wall", "wall", "norm", "wall", "wall", "norm", "wall","wall","norm"],
[  "norm", "wall", "wall", "norm", "wall", "wall", "norm", "norm", "norm", "norm","wall", "norm", "wall", "norm", "norm", "wall", "wall", "norm", "norm", "wall", "norm", "norm","norm", "wall", "wall", "norm", "wall", "wall", "norm", "wall","wall","norm"],
[  "norm", "wall", "wall", "door", "wall", "norm", "norm", "norm", "wall", "norm","wall", "norm", "wall", "norm", "norm", "wall", "wall", "norm", "wall", "norm", "norm", "norm","wall", "wall", "wall", "norm", "wall", "norm", "norm", "wall","wall","norm"],
[  "norm", "wall", "bas2", "norm", "wall", "norm", "wall", "norm", "norm", "wall","wall", "norm", "norm", "norm", "wall", "norm", "norm", "norm", "wall", "norm", "wall", "wall","wall", "wall", "wall", "norm", "wall", "wall", "wall", "bas2", "wall", "norm"],
[  "norm", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "norm", "norm","wall", "norm", "wall", "norm", "norm", "norm", "wall", "norm", "wall", "norm", "norm", "wall","wall", "wall", "wall", "norm", "wall", "wall", "door", "norm","wall","norm"],
[  "norm", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "wall","wall", "wall", "wall", "norm", "norm", "norm", "norm", "wall","wall","norm"],
[  "norm", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall","norm"],
[  "norm", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall","norm"],
[  "norm", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall", "wall", "wall", "wall", "wall", "wall", "wall", "wall","wall","norm"],
[  "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm","norm","norm"]

];
let teams = 2;

module.exports = {
    DDAYTWO_LOOP: true,
    TEAMS: teams,
    X_GRID: 32,
    ARENA_TYPE: "rect",
    MODE: "tdm",
    Y_GRID: 32,
    WIDTH: 8000,
    HEIGHT: 8000,
    ROOM_SETUP: room
};
