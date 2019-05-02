var lineChartData = {
    //X坐标数据
    labels : ["周一","周二","周三","周四","周五","周六","周末"],
    datasets: [
        {
            borderColor: [
                'rgba(0,255,255,0.5)'
            ],
            backgroundColor: [
                'rgba(0,0,255,0)'
            ],
            data: [300,555,655,714,899,905,1000],
            label: "1"
        },
        {
            borderColor: [
                'rgba(0,0,255,0.5)'
            ],
            backgroundColor: [
                'rgba(255,0,255,0)'
            ],
            data: [314,455,755,814,999,905,1000],
            label: "2"

        },
        {
            borderColor: [
                'rgba(0,255,0,0.5)'
            ],
            backgroundColor: [
                'rgba(0,0,255,0)'
            ],
            data: [114,255,455,414,599,605,500],
            label: "3"

        }
    ],
}

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx,{
        type: 'line',
        data: lineChartData,
        // options: {
        //     title: {
        //         display: true,
        //         text: 'Custom Chart Title'
        //     }
        // }
    })
}