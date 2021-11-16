

//date
const dateOp = {
    weekday : 'long',
    day: 'numeric'
};
const dateIn = new Date();


class UiFunctions{

    static dateTime() {      

        console.log(`date : ${dateIn.toLocaleDateString("en-US", dateOp)}`);
        console.log(`time : ${dateIn.getHours()}:${dateIn.getMinutes()}`);


        document.querySelector('.js-time').innerHTML = `<p>${dateIn.getHours()} : ${dateIn.getMinutes()}</p>`;
        document.querySelector('.time').innerHTML = `<p>${dateIn.toLocaleDateString("en-US", {day: "numeric"}) } | ${dateIn.toLocaleDateString("en-US", {weekday: "long"})}</p>`;

    };
    static clip() {

        document.querySelector('.hambug').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('clip');
            document.querySelector('.line').classList.toggle('line-anim');
            document.querySelector('.nav-bar').classList.toggle('navbg');
            document.querySelector('.time').classList.toggle('remove_date');
    

        });


    }
};

//progress bars
/*
#Rectangle_17{
    width: 50px;
}
#Rectangle_16{
    width: 50px;
}
#Rectangle_15{
    width: 50px;
}

function move() {
    let elem = document.getElementById("myBar");
    let width = 1;
    let inter = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(inter);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
*/
class ProgressBar{

    static weekInterParam() {

        let comp = dateIn.getDay();
        const result = ((comp / (7 + comp)) * 100);
        return result

       
    
    

    };
    static monthInterParam() {

        let comp = dateIn.getMonth();
        
        const result = ((comp / (6 + comp)) * 100);
        return result

       
    
    

    };
    static semInterParam() {

        let comp = dateIn.getMonth();
        
        const result = ((comp / (12 + comp)) * 100);
        return result

       
    
    

    };
    static weekBar(intervalParam) {
        let element =document.querySelector('#Rectangle_17');
        let width = 1;
        let interval = setInterval(function() {
            if(width >= intervalParam) {
                clearInterval(interval);
            }else{
                width++;
                element.style.width = width + '%';
            };

        }, 50);
    
    

    };
    static monthBar(intervalParam) {
        let element =document.querySelector('#Rectangle_15');
        let width = 1;
        let interval = setInterval(function() {
            if(width >= intervalParam) {
                clearInterval(interval);
            }else{
                width++;
                element.style.width = width + '%';
            };

        }, 50);
    
    

    };
    static semBar(intervalParam) {
        let element =document.querySelector('#Rectangle_16');
        let width = 1;
        let interval = setInterval(function() {
            if(width >= intervalParam) {
                clearInterval(interval);
            }else{
                width++;
                element.style.width = width + '%';
            };

        }, 50);
    
    

    };
};

// todays read display data

class today{
    static read(weekday) {

            // data

        const object = {
        
                    
        
            Monday:{
                
                am :{
                    course:'Seed Industry',
                    init:'9 : 00',
                    final: '11 : 00',
                    hours:'2 hours'
                },
                pm:{
                    course:'Bio Chemistry',
                    init:'02 : 00',
                    final:'04 : 00',
                    hours:'10 : 00'
                }
            },
            Tuesday:{
                
                am :{
                    course:'Bio Chemistry',
                    init:'8 : 00',
                    final: '10 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Seed Systems Policy And Law',
                    init:'02 : 00',
                    final:'04: 00',
                    hours: '10 : 00'
                }
            },
            Wednesday:{
                
                am :{
                    course:'Seed Systems Policy And Law',
                    init:'08 : 00',
                    final: '10 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Principals Of Soil Science',
                    init:'02 : 00',
                    final:'04 : 00',
                    hours:'10 : 00'
                }
            },
            Thursday:{
                
                am :{
                    course:'Principals Of Soil Science',
                    init:'8 : 00',
                    final: '10 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Agriculture Meterology',
                    init:'02 : 00',
                    final:'04 : 00',
                    hours:'10 : 00'
                   
                }
            },
            Friday:{
                
                am :{
                    course:'Agriculture Meterology',
                    init:'8 : 00',
                    final: '10 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Tissue Culture',
                    init:'02 : 00',
                    final:'04 : 00',
                    hours:'10 : 00'
                }
            },            
            Saturday:{
                
                am :{
                    course:'Tissue Culture',
                    init:'08 : 00',
                    final: '10 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Principals Of Irrigation',
                    init:'02 : 00',
                    final:'04 : 00',
                    hours:'10 : 00'
                   
                }
            },
            Sunday:{
                
                am :{
                    course:'Principals of Irrigation',
                    init:'02 : 00',
                    final: '03 : 00',
                    hours: '2 hours'
                },
                pm:{
                    course:'Seed Industry',
                    init:'03 : 00',
                    final:'05 : 00',
                    hours:'10 : 00'
                }
            }
        };
           
    

        

    
    
    
        
        
        if (weekday === 'Monday') {
            today.append(
                object.Monday.am.course,
                object.Monday.am.hours,
                object.Monday.am.init, 
                object.Monday.am.final,
                object.Monday.pm.course,
                object.Monday.pm.hours,
                object.Monday.pm.init, 
                object.Monday.pm.final,
            );

        }else if( weekday === 'Tuesday'){
            today.append(
                object.Tuesday.am.course,
                object.Tuesday.am.hours,
                object.Tuesday.am.init, 
                object.Tuesday.am.final,
                object.Tuesday.pm.course,
                object.Tuesday.pm.hours,
                object.Tuesday.pm.init, 
                object.Tuesday.pm.final,
            );

        }else if( weekday === 'Wednesday'){
            
            today.append(
                object.Wednesday.am.course,
                object.Wednesday.am.hours,
                object.Wednesday.am.init, 
                object.Wednesday.am.final,
                object.Wednesday.pm.course,
                object.Wednesday.pm.hours,
                object.Wednesday.pm.init, 
                object.Wednesday.pm.final,
            );



        }else if( weekday === 'Thursday'){
            today.append(
                object.Thursday.am.course,
                object.Thursday.am.hours,
                object.Thursday.am.init, 
                object.Thursday.am.final,
                object.Thursday.pm.course,
                object.Thursday.pm.hours,
                object.Thursday.pm.init, 
                object.Thursday.pm.final,
            );


        }else if( weekday === 'Friday'){
            today.append(
                object.Friday.am.course,
                object.Friday.am.hours,
                object.Friday.am.init, 
                object.Friday.am.final,
                object.Friday.pm.course,
                object.Friday.pm.hours,
                object.Friday.pm.init, 
                object.Friday.pm.final,
            );
        }else if( weekday === 'Saturday'){
            
            today.append(
                object.Saturday.am.course,
                object.Saturday.am.hours,
                object.Saturday.am.init, 
                object.Saturday.am.final,
                object.Saturday.pm.course,
                object.Saturday.pm.hours,
                object.Saturday.pm.init, 
                object.Saturday.pm.final,
            );
 


        }else if( weekday === 'Sunday'){
            today.append(
                object.Sunday.am.course,
                object.Sunday.am.hours,
                object.Sunday.am.init, 
                object.Sunday.am.final,
                object.Sunday.pm.course,
                object.Sunday.pm.hours,
                object.Sunday.pm.init, 
                object.Sunday.pm.final,
            );

        }else{
            console.log('Unexpecteed Token');
        }
    };

    static append(amCourse,amHour, initTime, finalTime, courseParam2, hourParam2,  timeParam2I, timeParam2F ) {

        document.querySelector('.drct-1').innerHTML = `<p>${amCourse}</p>`;
        document.querySelector('#hr').textContent = `${amHour} `;
        document.querySelector('#init-time').textContent = `${initTime}`;
        document.querySelector('#fin-time').textContent = `${finalTime}`;

        document.querySelector('.drct-2').innerHTML = `<p>${courseParam2}</p>`;
        document.querySelector('#hr-2').textContent = `${hourParam2} `;
        document.querySelector('#init-time-2').textContent = `${timeParam2I}`;
        document.querySelector('#fin-time-2').textContent = `${timeParam2F}`;
    };    

};



UiFunctions.dateTime();
UiFunctions.clip();
today.read(dateIn.toLocaleDateString("en-US", { weekday: "long"}));

//progress bar

document.addEventListener('DOMContentLoaded', function () {
    ProgressBar.weekBar(ProgressBar.weekInterParam());
    ProgressBar.monthBar(ProgressBar.monthInterParam());
    ProgressBar.semBar(ProgressBar.semInterParam());
    console.log(` this is result week: ${ProgressBar.weekInterParam()}`);
    console.log(` this is result month : ${ProgressBar.monthInterParam()}`);
    console.log(` this is result semester: ${ProgressBar.semInterParam()}`);
    

});