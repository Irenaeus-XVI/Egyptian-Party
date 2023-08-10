
function slideBar() {
    let sideBarWidth = $(".layerSlider").innerWidth();
    $(".layerSlider").animate({ left: -sideBarWidth }, 500)


    $("#closeBtn").click(function () {
        $(".layerSlider").animate({ left: -sideBarWidth }, 500)
    })




    $("#openBtn").click(function () {
        $(".layerSlider").animate({ left: "0px" }, 500)
    })


    $("a").click(function () {
        let position = $(this).attr("href")
        console.log($(position).offset());
        console.log($(position).offset().top);

        $("html , body").animate({ scrollTop: $(position).offset().top }, 500)

    })
    slideToggle();
    countDate();
    countChars();
}

slideBar();





function slideToggle() {
    $(".singer").click(function () {


        $(this).next().slideToggle(500)
        $(".content").not($(this).next()).slideUp(500);
        console.log("clicked");

    })

}




function countDate() {
    let date = new Date()
    let event = new Date("2023/9/3")
    let time = event.getTime() - date.getTime();

    let s = Math.floor(time / 1000);
    let m = Math.floor(s / 60);
    let h = Math.floor(m / 60);
    let d = Math.floor(h / 24);

    s %= 60;
    m %= 60;
    h %= 24;


    s = (s < 10) ? `0${s}` : s;
    m = (m < 10) ? `0${m}` : m;
    h = (h < 10) ? `0${h}` : h;


    $("#days").html(`<h3>${d} D</h3>`);
    $("#hours").html(`<h3>${h} h</h3>`);
    $("#mint").html(`<h3>${m} m</h3>`);
    $("#second").html(`<h3>${s} s</h3>`);

    setTimeout(countDate, 1000)

}




function countChars() {
    let input = document.querySelector("#textInput");

    let limit = 100;
    input.addEventListener("input", function (e) {
        console.log(e.data);


        if (e.data == null) {
            limit += 1;
        }
        else {
            limit -= 1;
        }

        let redLimit = document.querySelector("#redLimit");
        redLimit.innerHTML = limit;
        console.log(limit);


        if (limit <= 0) {
            redLimit.innerHTML = `your available character finished`;

            // input.addEventListener("keypress", function (e) {
            //     e.preventDefault()

            // });



        }

    })

}









