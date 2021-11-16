//id

class UuidCls{

    static idOne() {

        const str = 'abcdefghijklm';
        const num = Math.floor(Math.random() * 13);
        const strNum = num - 1

        const subStr = str.substring(strNum, num);
        const idNum = Math.floor(Math.random() * 9);

        return `${subStr}${idNum}`

    };
    static idTwo() {

        const str = 'nopqrstuvwxyz';
        const num = Math.floor(Math.random() * 13);
        const strNum = num - 1

        const subStr = str.substring(strNum, num);
        const idNum = Math.floor(Math.random() * 9);

        return `${subStr}${idNum}`

    };
    static uuid() {
        const idOne = UuidCls.idOne();
        const idTwo = UuidCls.idTwo();

        const id  = `${idOne}${idTwo}`;



        if (id.length == 3) {

            const num = `${Math.floor(Math.random() * 9)}`;

            const idMod = id + num ;

            return idMod;

        }else if(id.length == 2){

            const numM1 = `${Math.floor(Math.random() * 9)}`;
            const numM2 = `${Math.floor(Math.random() * 9)}`;

            const idMod2 = id + numM1 + numM2 ;

            return idMod2;

            
        }else{
            return id;
        };
    };
};

// date


const date = document.querySelector('.date');
const time = document.querySelector('.time');
const monthDis = document.querySelector('.month');
const dateOp = {
    weekday : 'long',
    day: 'numeric'
};
const dateIn = new Date();
time.innerHTML = `<p>${dateIn.getHours()} : ${dateIn.getMinutes()}</p>`;
monthDis.innerHTML = `<p>${dateIn.toLocaleDateString("en-US", {month: "long"})} </p>`;
date.innerHTML = `<p> ${dateIn.toLocaleDateString("en-US", {weekday: "long"})} | ${dateIn.toLocaleDateString("en-US", {day: "numeric"}) } </p>`;




// input

class Input{
    static form() {
        document.querySelector('.addbutton').addEventListener('click', function (event) {
            document.querySelector('.dr-mid').classList.toggle('remove');  
            document.querySelector('.formHandle').classList.toggle('handle');  
            document.querySelector('.formHandle').classList.toggle('form');            
            
            
            document.querySelector('#id').value = `/id/${UuidCls.uuid()}`;
            
        
        
        
            
        
        
        });
        
    };

    static clear() {


        setTimeout(function(){
            
            topic.value = '' ;
            id.value = '' ;
            
            document.querySelector('#id').value = `/id/${UuidCls.uuid()}`;
        }, 1000)

    };


};
// constructor function

class CourseConstruct {
    constructor (id, topicName, placeParam, durParam, timeParam) {
        this.id = id;
        this.topic = topicName;
        this.place = placeParam;
        this.duration = durParam;
        this.time = timeParam;

    };
};


// data storage
class Store{

    static getTopics(topicKey){
        let books;
        if(localStorage.getItem(`${topicKey}`) === null){
            books = localStorage.setItem(`${topicKey}`, '[]');
        }else{
            books = JSON.parse(localStorage.getItem(`${topicKey}`));
        }
        return books;
    };
    static addTopic(topicData, topicKey){
        const topics = Store.getTopics(topicKey);  


        topics.push(topicData);

        localStorage.setItem(`${topicKey}`, JSON.stringify(topics));

    };
    static removeTopic(id, topicKey){
        const topics = Store.getTopics(topicKey);

        topics.forEach(function(topic, index) {
            if(topic.id == id) {
                topics.splice(index, 1);
            }
        });

        localStorage.setItem(`${topicKey}`, JSON.stringify(topics));
    };
    
};
// ui
class Ui{
    static displayTopics() {

        const storedTopics = Store.getTopics('TODO');

        const topics = storedTopics;

        topics.forEach(function(topic) {

            Ui.addTopicToList(topic);

        });
    };  

    static addTopicToList(topicParam) {

        const list = document.querySelector('#topic-list');

        const row = document.createElement('tr');

        row.innerHTML = `<td>
                                            <p>${topicParam.topic}</p>
                                            <p class="com">${topicParam.place}</p>
                                            <p class="com">${topicParam.time}</p>
                                            <p class="com">${topicParam.duration}</p>

                                            
                                        </td><td class="delete">${topicParam.id}</td> `;

        list.appendChild(row);




        
    };

    static deleteTopic(element) {

        if(element.classList.contains('delete')) {
            element.parentElement.remove();

        };



    };


    
};

// events

class Events {

    static addEvent() {
        document.querySelector('.button').addEventListener('click', function (event) {

            // input variables
            //variables
        
            const courseIn = document.querySelector('#course').value;
            const topicIn = document.querySelector('#topic').value;
            const idIn = document.querySelector('#id').value;
            const placeIn = document.querySelector('#place').value;
            const durIn = document.querySelector('#duration').value;
            const timeIn = document.querySelector('#form-time').value;
            
        
        
         
            
        
            // validate 
            if(courseIn === '' || topicIn === '' || idIn === ''){
                document.querySelector('.error').classList.add('er-pop');
                document.querySelector('.error').innerHTML = 'fill in all fields';
        
                setTimeout(function(){
                    document.querySelector('.error').remove();
                }, 3000);
        
            }else{
        
            
            
        
                // instatiate topic
        
                const topic = new CourseConstruct(idIn, topicIn, placeIn, durIn, timeIn);
                console.log(topic);
        
                //add topic to list
        
                Ui.addTopicToList(topic);
               
        
                Store.addTopic(topic, document.querySelector('#course').value);

        
        
                // clear filds
        
                Input.clear();

            }
        });

    };
    static removeEvent(){

        // remove event

        document.querySelector('#topic-list').addEventListener('click', function(event) {

            Ui.deleteTopic(event.target);
            const topicKey = 'TODO';
            Store.removeTopic(event.target.textContent, topicKey);
            console.log(event.target.textContent);

        });


    };
    static displayEvent() {
        // display event


        document.addEventListener('DOMContentLoaded', function (event) {
            Ui.displayTopics();
        });

    };
};






//events


Events.addEvent();
Events.removeEvent();
Events.displayEvent();
// form

Input.form();

// display data
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
            document.querySelector('.read-dis').classList.add('remove');
            today.append(
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
            document.querySelector('.read-dis').classList.add('remove');
            today.append(
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

        document.querySelector('.td-read').textContent = `${amCourse}`;
        document.querySelector('.td-hr').textContent = `${amHour} `;
        document.querySelector('.td-time').textContent = `${initTime} : ${finalTime}`;
        

        document.querySelector('.td-read2').innerHTML = `<p>${courseParam2}</p>`;
        document.querySelector('.td-hr2').textContent = `${hourParam2} `;
        document.querySelector('.td-time2').textContent = `${timeParam2I} : ${timeParam2F}`;

        
    };    

};

today.read(dateIn.toLocaleDateString("en-US", { weekday: "long"}));
document.querySelector('#course').value = "TODO";
