document.querySelector("#send-request").addEventListener("click", () => {
  console.log("hello");
  wt_sendinfo_media(
    document.querySelector("#mi").value,
    document.querySelector("#mk").value,
    document.querySelector("#mt1").value,
    document.querySelector("#mt2").value,
    document.querySelector("#eid").value,
    document.querySelector("#bw").value,
    document.querySelector("#vol").value,
    document.querySelector("#mut").value
  );
});
