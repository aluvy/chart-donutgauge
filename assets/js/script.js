// chart sample
window.addEventListener("load", ()=>{
    // $(".knob").each(()=>{
    let $this = $(".knob");
    let myVal = $this.attr("rel");
    $this.knob();

    $({
        value: 0
    }).animate({
        value: myVal
    }, {
        duration: 2000,
        easing: 'easeOutCubic',
        step: function () {
            // $this.val(Math.ceil(this.value)).trigger('change');
            $this.val((this.value).toFixed(2)).trigger('change');
            $this.val((this.value).toFixed(0));
        }
    })
})


// gauge chart
window.addEventListener("load", function(){
    var control = document.getElementById('control');
    var bar = document.querySelector('.bar');
    var value = document.querySelector('.value');

    var RADIUS = 110;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    function progress(per) {
        var progress = per / 200;
        var dashoffset = CIRCUMFERENCE * (1 - progress);
        bar.style.strokeDasharray = CIRCUMFERENCE;
        
        value.innerHTML = per +'%';
        bar.style.strokeDashoffset = dashoffset;
    }
    progress(50);

    control.addEventListener('input', function(event) {
        progress(event.target.valueAsNumber);
    });
    control.addEventListener('change', function(event){
    progress(event.target.valueAsNumber);
    });
});