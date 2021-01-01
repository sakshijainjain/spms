/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 function setGraph (min,avg,score,max) {
        alert("setGraph : stu-report.js");
    var options = {
        animationEnabled: true,
        title: {
            text: " Score Report"
        },
        axisY: {
            title: "Marks",
            includeZero: true,         

        },
        axisX: {    },
        data: [{ color: "#F08080",
        lineDashType: "dash",
            type: "line",
             yValueFormatString: "#.#",
            dataPoints: [
                { label: "Min Score" , y: min },	
                { label: "Average Score", y: avg},	
                { label: "Your Score" , y: score},
                { label: "Max Score", y: max },	
                
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
        
    }
