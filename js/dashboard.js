function increaseStat(type){

let stats =
JSON.parse(
localStorage.getItem("stats")
) || {

chat:0,
football:0,
creator:0,
study:0,
games:0,
crypto:0

};

stats[type]++;

localStorage.setItem(
"stats",
JSON.stringify(stats)
);

}
