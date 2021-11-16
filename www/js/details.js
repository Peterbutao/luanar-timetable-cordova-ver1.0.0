

//date
const dateOp = {
    weekday : 'long',
    day: 'numeric'
};
const dateIn = new Date();


class UiFunctions{

    static dateTime() {     
        document.querySelector('.current-dt').textContent = `${dateIn.getDay()}/${dateIn.getMonth() }`;

    };
    
};
class Ppo{

    static planInterParam() {
        let comp = dateIn.getMonth();

        const result =((comp/31)*100)
        return result

       
    
    

    };
    static varInterParam() {
        let comp = dateIn.getMonth();

        const result =((comp/31)*100)+12

        
        return result

       
    
    

    };
    static actualInterParam() {
        let comp = dateIn.getDay();

        const result =((comp/31)*100)

        
        return result

       
    
    

    };
    static plannedProgress(intervalParam) {
        let element =document.querySelector('.plan-pro');
        let width = 1;
        let interval = setInterval(function() {
            if(width >= intervalParam) {
                clearInterval(interval);
            }else{
                width++;
                element.textContent = width + '%';
            };

        }, 200);
    
    

    };
    static variance(intervalParam) {
        let element =document.querySelector('.variance');
        let width = 1;
        let interval = setInterval(function() {
            if(width >= intervalParam) {
                clearInterval(interval);
            }else{
                width++;
                element.textContent = width + '%';
            };

        }, 200);
    
    

    };
    static actualProgress(intervalParam) {
        let element =document.querySelector('.actual-pro');
        let width = 1;
        let interval = setInterval(function() {
            if(width >= intervalParam) {
                clearInterval(interval);
            }else{
                width++;
                element.textContent = width + '%';
            };

        }, 200);
    
    

    };
};



// todays read display data

class today{
    static read(weekday) {

            // data

        const object = {
        
                    
        
            Monday:{
                
                am :{
                    
                    hours: 2
                },
                pm:{
                    
                    hours: 2
                }
            },
            Tuesday:{
                
                am :{
                   
                    hours: 2
                },
                pm:{
                    
                    hours: 2
                }
            },
            Wednesday:{
                
                am :{
                    
                    hours: 0
                },
                pm:{
                    
                    hours: 2
                }
            },
            Thursday:{
                
                am :{
                    
                    hours: 1
                },
                pm:{
                    
                    hours: 2
                }
            },
            Friday:{
                
                am :{
                   
                    hours: 2
                },
                pm:{
                    
                    hours: 2
                }
            },            
            Saturday:{
                
                am :{
                   
                    hours: 0 
                },
                pm:{

                    hours: 2
                }
            },
            Sunday:{
                
                am :{

                    hours: 2
                },
                pm:{

                    hours: 2
                }
            }
        };
           
    const totalHours = (object.Monday.am.hours + 
        object.Tuesday.am.hours +
        object.Wednesday.am.hours +
        object.Thursday.am.hours +
        object.Friday.am.hours +
        object.Saturday.am.hours +
        object.Sunday.am.hours );

    

    
    
    
        
        
        if (weekday === 'Monday') {
            const dayHrs = object.Monday.pm.hours + object.Monday.am.hours;
            today.append(dayHrs,totalHours  );

        }else if( weekday === 'Tuesday'){
            const dayHrs = object.Tuesday.pm.hours + object.Tuesday.am.hours;
            today.append(dayHrs,totalHours  );

        }else if( weekday === 'Wednesday'){
            const dayHrs = object.Wednesday.pm.hours + object.Wednesday.am.hours;
            today.append(dayHrs,totalHours  );

        }else if( weekday === 'Thursday'){
            const dayHrs = object.Thursday.pm.hours + object.Thursday.am.hours;
            today.append(dayHrs,totalHours  );       

        }else if( weekday === 'Friday'){
            const dayHrs = object.Friday.pm.hours + object.Friday.am.hours;
            today.append(dayHrs,totalHours  );

        }else if( weekday === 'Saturday'){
            const dayHrs = object.Saturday.pm.hours + object.Saturday.am.hours;
            today.append(dayHrs,totalHours  );      

        }else if( weekday === 'Sunday'){
            const dayHrs = object.Sunday.pm.hours + object.Sunday.am.hours;
            today.append(dayHrs,totalHours  );

        }else{
            console.log('Unexpecteed Token');
        }
    };

    static append(doneHrs, total ) {

        document.querySelector('.ta-hrs').textContent = `${total}.0`;
        document.querySelector('.te-hrs').textContent = `${doneHrs}.0`;

        const ratio =(doneHrs/total).toFixed(3);
        const ratioPer = ((ratio)*100)

        document.querySelector('.ratio').textContent = `${ratio} `;
        

        
        let width = 1
        let interval = setInterval(function() {
            if(width >= ratioPer) {
                clearInterval(interval);
            }else{
                width++;
                document.querySelector('.ratio-per').textContent = width + '%';
            };

        }, 150);
        
        
    
        
    };    

};



UiFunctions.dateTime();


today.read(dateIn.toLocaleDateString("en-US", { weekday: "long"}));
//progress bar
document.addEventListener('DOMContentLoaded', function () {
    Ppo.plannedProgress(Ppo.planInterParam());
    Ppo.variance(Ppo.varInterParam());
    Ppo.actualProgress(Ppo.actualInterParam());
    

});

