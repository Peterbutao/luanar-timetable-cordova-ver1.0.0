/*
//date

const dateOp = {
    weekday : 'long',
    day: 'numeric'
};

const dateIn = new Date();

const dateStr = `${dateIn.toLocaleDateString("en-US", dateOp)}`;
const min = `${dateIn.getMinutes()}`;



console.log(`date : ${dateStr}`);
console.log(`hour : ${dateIn.getHours()}`);
console.log(`day : ${dateIn.toLocaleDateString("en-US", { weekday: "long"})}`);
console.log(`time : ${dateIn.getHours()}:${dateIn.getMinutes()}`);



class Today{
    static tableRead(weekday) {
        
        if (weekday == 'Monday') {

           const hour = dateIn.getHours();
        

            if (hour == '6') {
                Today.highLight(document.querySelector('.m_6'));
                document.querySelector('.m_7').textContent = 'AAE';
                document.querySelector('.m_8').textContent = 'AAE';
                document.querySelector('.m_7').classList.add('highlight_s');
                document.querySelector('.m_8').classList.add('highlight_s');
                document.querySelector('.h6a').classList.add('highlight_t');
              
    
            }else if( hour == '7'){
                Today.highLight(document.querySelector('.m_7'));
                document.querySelector('.m_7').textContent = 'AAE';
                document.querySelector('.m_8').textContent = 'AAE';
                document.querySelector('.m_6').classList.add('highlight_s');
                document.querySelector('.m_8').classList.add('highlight_s');
                document.querySelector('.h7a').classList.add('highlight_t');
               
    
            }else if( hour == '8'){
                Today.highLight(document.querySelector('.m_8'));
                document.querySelector('.m_7').textContent = 'AAE';
                document.querySelector('.m_8').textContent = 'AAE';
                document.querySelector('.m_7').classList.add('highlight_s');
                document.querySelector('.m_6').classList.add('highlight_s');
                document.querySelector('.h8a').classList.add('highlight_t');
               
    
            }else if( hour == '9'){
                Today.highLight(document.querySelector('.m_9'));
                document.querySelector('.m_11').classList.add('highlight_s');
                document.querySelector('.m_10').classList.add('highlight_s');
                document.querySelector('.h9a').classList.add('highlight_t');
               
    
            }else if( hour == '10'){
                Today.highLight(document.querySelector('.m_10'));
                document.querySelector('.m_11').classList.add('highlight_s');
                document.querySelector('.m_9').classList.add('highlight_s');
                document.querySelector('.h10a').classList.add('highlight_t');
               
    
            }else if( hour == '11'){
                Today.highLight(document.querySelector('.m_11'));
                document.querySelector('.m_9').classList.add('highlight_s');
                document.querySelector('.m_10').classList.add('highlight_s');
                document.querySelector('.h11a').classList.add('highlight_t');
               
    
            }else if( hour == '12'){
                const min = dateIn.getMinutes();
                if (min <= '50') {
                    document.querySelector('.m_12').classList.add('highlight_b');
                    document.querySelector('.m_12-50').classList.add('highlight_b');
                    document.querySelector('.h12-50a').classList.add('highlight_t');
                }else{
                    document.querySelector('.m_12').classList.add('highlight_b');
                    document.querySelector('.m_12-50').classList.add('highlight_b');
                    document.querySelector('.h12a').classList.add('highlight_t');
                    
                };
    
            }else if( hour == '13'){       
                Today.highLight(document.querySelector('.m_13'))
                ;
                
                document.querySelector('.m_14').textContent = 'SAT';
                document.querySelector('.m_14').classList.add('highlight_s');
                document.querySelector('.h1p').classList.add('highlight_t');    
               
            }else if( hour == '14'){
                Today.highLight(document.querySelector('.m_14'));
                document.querySelector('.m_14').textContent = 'SAT';
                document.querySelector('.m_14').classList.add('highlight_s');
                document.querySelector('.h2p').classList.add('highlight_t');  
    
            }else if( hour == '15'){  
                
                document.querySelector('.m_15').classList.add('highlight_b');
                document.querySelector('.m_16').classList.add('highlight_b');
                document.querySelector('.m_17').classList.add('highlight_b');
                document.querySelector('.m_18').classList.add('highlight_b');
                document.querySelector('.h3p').classList.add('highlight_t');  
    
            }else if( hour == '16'){
                document.querySelector('.m_15').classList.add('highlight_b');
                document.querySelector('.m_16').classList.add('highlight_b');
                document.querySelector('.m_17').classList.add('highlight_b');
                document.querySelector('.m_18').classList.add('highlight_b');
                document.querySelector('.h4p').classList.add('highlight_t');
    
            }else if( hour == '17'){ 
                document.querySelector('.m_15').classList.add('highlight_b');
                document.querySelector('.m_16').classList.add('highlight_b');
                document.querySelector('.m_17').classList.add('highlight_b');
                document.querySelector('.m_18').classList.add('highlight_b');
                document.querySelector('.h5p').classList.add('highlight_t');
    
            }else if( hour == '18'){
                document.querySelector('.m_15').classList.add('highlight_b');
                document.querySelector('.m_16').classList.add('highlight_b');
                document.querySelector('.m_17').classList.add('highlight_b');
                document.querySelector('.m_18').classList.add('highlight_b');
                document.querySelector('.h6p').classList.add('highlight_t');
    
            }else if( hour == '20'){   
                Today.highLight(document.querySelector('.m_20')); 
                document.querySelector('.m_21').classList.add('highlight_s');
                document.querySelector('.m_22').classList.add('highlight_s');
                document.querySelector('.h8p').classList.add('highlight_t');     
               
            }else if( hour == '21'){
                Today.highLight(document.querySelector('.m_21'));
                document.querySelector('.m_20').classList.add('highlight_s');
                document.querySelector('.m_22').classList.add('highlight_s');
                document.querySelector('.h9p').classList.add('highlight_t');
    
            }else if( hour == '22'){    
                Today.highLight(document.querySelector('.m_22'));
                document.querySelector('.m_21').classList.add('highlight_s');
                document.querySelector('.m_20').classList.add('highlight_s');
                document.querySelector('.h10p').classList.add('highlight_t');       
               
          
    
    
            }else{
                console.log('No Highlight');
            }

        }else if( weekday == 'Tuesday'){

            const hour = dateIn.getHours();
            

            if (hour == '6') {
                
                document.querySelector('.t_7').classList.add('highlight_b');
                document.querySelector('.t_6').classList.add('highlight_b');
                document.querySelector('.h6a').classList.add('highlight_t');
              
    
            }else if( hour == '7'){
               
                document.querySelector('.t_7').classList.add('highlight_b');
                document.querySelector('.t_6').classList.add('highlight_b');
                document.querySelector('.h7a').classList.add('highlight_t');
               
    
            }else if( hour == '8'){
                Today.highLight(document.querySelector('.t_8'));
                document.querySelector('.t_10').classList.add('highlight_s');
                document.querySelector('.t_9').classList.add('highlight_s');
                document.querySelector('.h8a').classList.add('highlight_t');
               
    
            }else if( hour == '9'){
                Today.highLight(document.querySelector('.t_9'));
                document.querySelector('.t_10').classList.add('highlight_s');
                document.querySelector('.t_8').classList.add('highlight_s');
                document.querySelector('.h9a').classList.add('highlight_t');
               
    
            }else if( hour == '10'){
                Today.highLight(document.querySelector('.t_10'));
                document.querySelector('.t_8').classList.add('highlight_s');
                document.querySelector('.t_9').classList.add('highlight_s');
                document.querySelector('.h10a').classList.add('highlight_t');
               
    
            }else if( hour == '11'){
                document.querySelector('.t_11').classList.add('highlight_b');
                document.querySelector('.h11a').classList.add('highlight_t');
               
    
            }else if( hour == '12' ){
                const min = dateIn.getMinutes();
                
                if (min < '50') {
                    Today.highLight(document.querySelector('.t_12')); 
                    document.querySelector('.t_12-50').classList.add('highlight_s');
                    document.querySelector('.h12-50a').classList.add('highlight_t');
                    document.querySelector('.t_13').classList.add('highlight_s');                   
                    document.querySelector('.t_12-50').classList.add('highlight_s');
                    document.querySelector('.t_b12').classList.add('highlight_s');
                    document.querySelector('.t_b12').textContent = 'AGN';
                }else{
                    Today.highLight(document.querySelector('.t_12-50')); 
                    document.querySelector('.t_12').classList.add('highlight_s');
                    document.querySelector('.h12a').classList.add('highlight_t');
                    document.querySelector('.t_12-50').classList.add('highlight_s');
                    document.querySelector('.t_b12').textContent = 'AGN';
                    document.querySelector('.t_b12').classList.add('highlight_s');
                    document.querySelector('.t_13').classList.add('highlight_s');
                };
    
            }else if( hour == '13'){       
                Today.highLight(document.querySelector('.t_13'));    
                document.querySelector('.t_12').classList.add('highlight_s');
                document.querySelector('.t_12-50').classList.add('highlight_s');
                document.querySelector('.t_b12').textContent = 'AGN';
                document.querySelector('.t_b12').classList.add('highlight_s');
                document.querySelector('.h1p').classList.add('highlight_t');
               
            }else if( hour == '14'){
                document.querySelector('.t_14').classList.add('highlight_b');
                document.querySelector('.h2p').classList.add('highlight_t');
    
            }else if( hour == '15'){  
                Today.highLight(document.querySelector('.t_15'));
                document.querySelector('.t_16').textContent = 'AGN';
                document.querySelector('.t_16').classList.add('highlight_s');
                document.querySelector('.h3p').classList.add('highlight_t');
    
            }else if( hour == '16'){
                Today.highLight(document.querySelector('.t_16'));
                document.querySelector('.t_16').textContent = 'AGN';
                document.querySelector('.t_15').classList.add('highlight_s');
                document.querySelector('.h4p').classList.add('highlight_t');
    
            }else if( hour == '17'){ 
                Today.highLight(document.querySelector('.t_17'));
                document.querySelector('.h5p').classList.add('highlight_t');
    
            }else if( hour == '18'){
                
                Today.highLight(document.querySelector('.t_18'));
                document.querySelector('.h6p').classList.add('highlight_t');
    
            }else if( hour == '20'){   
                Today.highLight(document.querySelector('.t_20')); 
                document.querySelector('.t_21').classList.add('highlight_s');
                document.querySelector('.t_22').classList.add('highlight_s');
                document.querySelector('.h8p').classList.add('highlight_t');     
               
            }else if( hour == '21'){
                Today.highLight(document.querySelector('.t_21'));
                document.querySelector('.t_20').classList.add('highlight_s');
                document.querySelector('.t_22').classList.add('highlight_s');
                document.querySelector('.h9p').classList.add('highlight_t');
    
            }else if( hour == '22'){    
                Today.highLight(document.querySelector('.t_22'));  
                document.querySelector('.t_21').classList.add('highlight_s');
                document.querySelector('.t_20').classList.add('highlight_s');
                document.querySelector('.h10p').classList.add('highlight_t');     
               
          
    
    
            }else{
                console.log('No Highlight');
            }
            

        }else if( weekday == 'Wednesday'){

            const hour = dateIn.getHours();
            

            if (hour == '6') {
                Today.highLight(document.querySelector('.w_6'));
              
    
            }else if( hour == '7'){
                Today.highLight(document.querySelector('.w_7'));
                document.querySelector('.w_9').classList.add('highlight_s');
                document.querySelector('.w_8').classList.add('highlight_s');
                document.querySelector('.w_9').textContent = 'AGE';
                document.querySelector('.w_8').textContent = 'AGE';
                document.querySelector('.h7a').classList.add('highlight_t');
                
               
    
            }else if( hour == '8'){
                Today.highLight(document.querySelector('.w_8'));
                document.querySelector('.w_9').classList.add('highlight_s');
                document.querySelector('.w_7').classList.add('highlight_s');
                document.querySelector('.w_9').textContent = 'AGE';
                document.querySelector('.w_8').textContent = 'AGE';
                document.querySelector('.h8a').classList.add('highlight_t');
               
    
            }else if( hour == '9'){
                Today.highLight(document.querySelector('.w_9'));
                document.querySelector('.w_7').classList.add('highlight_s');
                document.querySelector('.w_8').classList.add('highlight_s');
                document.querySelector('.w_9').textContent = 'AGE';
                document.querySelector('.w_8').textContent = 'AGE';
                document.querySelector('.h9a').classList.add('highlight_t');
               
    
            }else if( hour == '10'){
                Today.highLight(document.querySelector('.w_10'));
                document.querySelector('.w_11').classList.add('highlight_s');
                document.querySelector('.w_12').classList.add('highlight_s');
                document.querySelector('.w_12-50').classList.add('highlight_s');
                document.querySelector('.h10a').classList.add('highlight_t');
               
    
            }else if( hour == '11'){
                Today.highLight(document.querySelector('.w_11'));
                document.querySelector('.w_10').classList.add('highlight_s');
                document.querySelector('.w_12').classList.add('highlight_s');
                document.querySelector('.w_12-50').classList.add('highlight_s');
                document.querySelector('.h11a').classList.add('highlight_t');
               
    
            }else if( hour == '12' ){
                const min = dateIn.getMinutes();
                
                if (min < '50') {
                    Today.highLight(document.querySelector('.w_12')); 
                    document.querySelector('.w_12-50').classList.add('highlight_s');
                    document.querySelector('.h12-50a').classList.add('highlight_t');
                    document.querySelector('.w_11').classList.add('highlight_s');                   
                    document.querySelector('.w_12-50').classList.add('highlight_s');
                    document.querySelector('.w_10').classList.add('highlight_s');
                }else{
                    Today.highLight(document.querySelector('.w_12-50')); 
                    document.querySelector('.w_12').classList.add('highlight_s');
                    document.querySelector('.h12a').classList.add('highlight_t');                    
                    document.querySelector('.w_10').classList.add('highlight_s');
                    document.querySelector('.w_11').classList.add('highlight_s');
                };
    
            }else if( hour == '13'){       
                document.querySelector('.w_13').classList.add('highlight_b');
                document.querySelector('.w_14').classList.add('highlight_b');   
                document.querySelector('.h1p').classList.add('highlight_t');                    
               
            }else if( hour == '14'){
                document.querySelector('.w_13').classList.add('highlight_b');
                document.querySelector('.w_14').classList.add('highlight_b');   
                document.querySelector('.h2p').classList.add('highlight_t');  
    
            }else if( hour == '15'){  
                Today.highLight(document.querySelector('.w_15'));
                document.querySelector('.w_17').classList.add('highlight_s');
                document.querySelector('.w_16').classList.add('highlight_s');   
                document.querySelector('.w_17').textContent = 'BSC';
                document.querySelector('.w_16').textContent = 'BSC';   
                document.querySelector('.h3p').classList.add('highlight_t');  
    
            }else if( hour == '16'){
                Today.highLight(document.querySelector('.w_16'));
                document.querySelector('.w_17').classList.add('highlight_s');
                document.querySelector('.w_15').classList.add('highlight_s');   
                document.querySelector('.w_17').textContent = 'BSC';
                document.querySelector('.w_16').textContent = 'BSC';   
                document.querySelector('.h4p').classList.add('highlight_t');  

    
            }else if( hour == '17'){ 
                Today.highLight(document.querySelector('.w_17'));
                document.querySelector('.w_15').classList.add('highlight_s');
                document.querySelector('.w_16').classList.add('highlight_s');   
                document.querySelector('.w_17').textContent = 'BSC';
                document.querySelector('.w_16').textContent = 'BSC';   
                document.querySelector('.h5p').classList.add('highlight_t');  
    
            }else if( hour == '18'){
                document.querySelector('.w_18').classList.add('highlight_b'); 
                document.querySelector('.h6p').classList.add('highlight_t');  
    
            }else if( hour == '20'){   
                Today.highLight(document.querySelector('.w_20'));
                document.querySelector('.w_21').classList.add('highlight_s');
                document.querySelector('.w_22').classList.add('highlight_s');
                document.querySelector('.h8p').classList.add('highlight_t');
               
            }else if( hour == '21'){
                Today.highLight(document.querySelector('.w_21'));
                document.querySelector('.w_20').classList.add('highlight_s');
                document.querySelector('.w_22').classList.add('highlight_s');
                document.querySelector('.h9p').classList.add('highlight_t');
    
            }else if( hour == '22'){    
                Today.highLight(document.querySelector('.w_22'));  
                document.querySelector('.w_21').classList.add('highlight_s');
                document.querySelector('.w_20').classList.add('highlight_s');
                document.querySelector('.h10p').classList.add('highlight_t');     
               
          
    
    
            }else{
                console.log('No Highlight');
            }
        
        }else if( weekday == 'Thursday'){

            const hour = dateIn.getHours();
            

            if (hour == '6') {
                Today.highLight(document.querySelector('.th_6'));
                document.querySelector('.th_7').classList.add('highlight_s');
                document.querySelector('.th_7').textContent = 'AAE';   
                document.querySelector('.h6a').classList.add('highlight_t');  
              
    
            }else if( hour == '7'){
                Today.highLight(document.querySelector('.th_7'));
                document.querySelector('.th_6').classList.add('highlight_s');
                document.querySelector('.th_7').textContent = 'AAE';   
                document.querySelector('.h7a').classList.add('highlight_t');  
               
    
            }else if( hour == '8'){
                Today.highLight(document.querySelector('.th_8'));
                document.querySelector('.th_9').classList.add('highlight_s'); 
                document.querySelector('.h8a').classList.add('highlight_t');  
               
    
            }else if( hour == '9'){
                Today.highLight(document.querySelector('.th_9'));
                document.querySelector('.th_8').classList.add('highlight_s'); 
                document.querySelector('.h9a').classList.add('highlight_t');  
               
    
            }else if( hour == '10'){
                Today.highLight(document.querySelector('.th_10'));
                document.querySelector('.th_11').classList.add('highlight_s');
                document.querySelector('.th_12').classList.add('highlight_s');
                document.querySelector('.th_12-50').classList.add('highlight_s');
                document.querySelector('.h10a').classList.add('highlight_t');
               
    
            }else if( hour == '11'){
                Today.highLight(document.querySelector('.th_11'));
                document.querySelector('.th_10').classList.add('highlight_s');
                document.querySelector('.th_12').classList.add('highlight_s');
                document.querySelector('.th_12-50').classList.add('highlight_s');
                document.querySelector('.h11a').classList.add('highlight_t');
               
    
            }else if( hour == '12'  ){
                const min = dateIn.getMinutes();
                
                if (min < '50') {
                    Today.highLight(document.querySelector('.th_12')); 
                    document.querySelector('.th_12-50').classList.add('highlight_s');
                    document.querySelector('.h12-50a').classList.add('highlight_t');
                    document.querySelector('.th_11').classList.add('highlight_s');                   
                    document.querySelector('.th_12-50').classList.add('highlight_s');
                    document.querySelector('.th_10').classList.add('highlight_s');
                }else{
                    Today.highLight(document.querySelector('.th_12-50')); 
                    document.querySelector('.th_12').classList.add('highlight_s');
                    document.querySelector('.h12a').classList.add('highlight_t');                    
                    document.querySelector('.th_10').classList.add('highlight_s');
                    document.querySelector('.th_11').classList.add('highlight_s');
                };
    
            }else if( hour == '13'){       
                document.querySelector('.th_13').classList.add('highlight_b');
                document.querySelector('.h1p').classList.add('highlight_t');       
               
            }else if( hour == '14'){
                Today.highLight(document.querySelector('.th_14'));
                document.querySelector('.th_15').classList.add('highlight_s');
                document.querySelector('.th_15').textContent = 'SAT';   
                document.querySelector('.h2p').classList.add('highlight_t');   
    
            }else if( hour == '15'){  
                Today.highLight(document.querySelector('.th_15'));
                document.querySelector('.th_14').classList.add('highlight_s');
                document.querySelector('.th_15').textContent = 'SAT';   
                document.querySelector('.h3p').classList.add('highlight_t');   
                
    
            }else if( hour == '16'){
                Today.highLight(document.querySelector('.th_16'));
                document.querySelector('.th_17').classList.add('highlight_s');
                document.querySelector('.th_17').textContent = 'ABM';   
                document.querySelector('.h4p').classList.add('highlight_t');   
    
            }else if( hour == '17'){ 
                Today.highLight(document.querySelector('.th_17'));
                document.querySelector('.th_16').classList.add('highlight_s');
                document.querySelector('.th_17').textContent = 'ABM';   
                document.querySelector('.h5p').classList.add('highlight_t');   
    
            }else if( hour == '18'){
                document.querySelector('.th_18').classList.add('highlight_b');   
                document.querySelector('.h6p').classList.add('highlight_t');   
                
    
            }else if( hour == '20'){   
                Today.highLight(document.querySelector('.th_20')); 
                document.querySelector('.th_21').classList.add('highlight_s');
                document.querySelector('.th_22').classList.add('highlight_s');
                document.querySelector('.h8p').classList.add('highlight_t');     
               
            }else if( hour == '21'){
                Today.highLight(document.querySelector('.th_21'));
                document.querySelector('.th_20').classList.add('highlight_s');
                document.querySelector('.th_22').classList.add('highlight_s');
                document.querySelector('.h9p').classList.add('highlight_t');
    
            }else if( hour == '22'){    
                Today.highLight(document.querySelector('.th_22')); 
                document.querySelector('.th_21').classList.add('highlight_s');
                document.querySelector('.th_20').classList.add('highlight_s');
                document.querySelector('.h10p').classList.add('highlight_t');      
               
          
    
    
            }else{
                console.log('No Highlight');
            }         

        }else if( weekday == 'Friday'){

            const hour = dateIn.getHours();
            

            if (hour == '6') {
                Today.highLight(document.querySelector('.f_6'));
                 
                document.querySelector('.h6a').classList.add('highlight_t');   
              
    
            }else if( hour == '7'){
                Today.highLight(document.querySelector('.f_7'));  
                document.querySelector('.h7a').classList.add('highlight_t');   
               
    
            }else if( hour == '8'){
                Today.highLight(document.querySelector('.f_8'));
                document.querySelector('.f_9').classList.add('highlight_s');   
                document.querySelector('.f_10').classList.add('highlight_s');   
                document.querySelector('.h8a').classList.add('highlight_t');   
               
    
            }else if( hour == '9'){
                Today.highLight(document.querySelector('.f_9'));
                document.querySelector('.f_8').classList.add('highlight_s');   
                document.querySelector('.f_10').classList.add('highlight_s');   
                document.querySelector('.h9a').classList.add('highlight_t');   
               
    
            }else if( hour == '10'){
                Today.highLight(document.querySelector('.f_10'));
                document.querySelector('.f_9').classList.add('highlight_s');   
                document.querySelector('.f_8').classList.add('highlight_s');   
                document.querySelector('.h10a').classList.add('highlight_t');
               
    
            }else if( hour == '11'){
                document.querySelector('.f_11').classList.add('highlight_b');   
                document.querySelector('.h11a').classList.add('highlight_t');
               
    
            }else if( hour == '12' ){
                document.querySelector('.f_12').classList.add('highlight_b');   
                document.querySelector('.f_12-50').classList.add('highlight_b');   
                document.querySelector('.h12-50a').classList.add('highlight_t');
    
            }else if( hour == '13'){       
                Today.highLight(document.querySelector('.f_13'));   
                document.querySelector('.f_14').classList.add('highlight_s');   
                document.querySelector('.f_14').textContent = 'ABM';   
                document.querySelector('.h1p').classList.add('highlight_t'); 
               
            }else if( hour == '14'){
                Today.highLight(document.querySelector('.f_14'));
                document.querySelector('.f_13').classList.add('highlight_s');   
                document.querySelector('.f_14').textContent = 'ABM';   
                document.querySelector('.h2p').classList.add('highlight_t'); 
    
            }else if( hour == '15'){  
                document.querySelector('.f_15').classList.add('highlight_b');      
                document.querySelector('.h3p').classList.add('highlight_t'); 
    
            }else if( hour == '16'){
                Today.highLight(document.querySelector('.f_16'));
                document.querySelector('.f_17').classList.add('highlight_s');   
                document.querySelector('.f_17').textContent = 'BSC';   
                document.querySelector('.h4p').classList.add('highlight_t'); 
    
            }else if( hour == '17'){ 
                Today.highLight(document.querySelector('.f_17'));
                document.querySelector('.f_16').classList.add('highlight_s');   
                document.querySelector('.f_17').textContent = 'BSC';   
                document.querySelector('.h5p').classList.add('highlight_t'); 
    
            }else if( hour == '18'){
                
                Today.highLight(document.querySelector('.f_18'));   
                document.querySelector('.h6p').classList.add('highlight_t'); 
    
            }else if( hour == '20'){   
                Today.highLight(document.querySelector('.f_20')); 
                document.querySelector('.f_21').classList.add('highlight_s');
                document.querySelector('.f_22').classList.add('highlight_s');
                document.querySelector('.h8p').classList.add('highlight_t');     
               
            }else if( hour == '21'){
                Today.highLight(document.querySelector('.f_21'));
                document.querySelector('.f_20').classList.add('highlight_s');
                document.querySelector('.f_22').classList.add('highlight_s');
                document.querySelector('.h9p').classList.add('highlight_t');
    
            }else if( hour == '22'){    
                Today.highLight(document.querySelector('.f_22')); 
                document.querySelector('.f_21').classList.add('highlight_s');
                document.querySelector('.f_20').classList.add('highlight_s');
                document.querySelector('.h10p').classList.add('highlight_t');      
               
          
    
    
            }else{
                console.log('No Highlight');
            }       

        }else if( weekday == 'Saturday'){

            const hour = dateIn.getHours();

            if (hour == '6') {
                Today.highLight(document.querySelector('.s_6'));
              
    
            }else if( hour == '7'){
                Today.highLight(document.querySelector('.s_7'));
               
    
            }else if( hour == '8'){
                Today.highLight(document.querySelector('.s_8'));
               
    
            }else if( hour == '9'){
                Today.highLight(document.querySelector('.s_9'));
               
    
            }else if( hour == '10'){
                Today.highLight(document.querySelector('.s_10'));
               
    
            }else if( hour == '11'){
                Today.highLight(document.querySelector('.s_11'));
            
    
            }else if( hour == '12' && min <= '50' ){
                Today.highLight(document.querySelector('.s_12'));
    
            }else if( hour == '13'){       
                Today.highLight(document.querySelector('.s_13'));    
               
            }else if( hour == '14'){
                Today.highLight(document.querySelector('.s_14'));
    
            }else if( hour == '15'){  
                Today.highLight(document.querySelector('.s_15'));
    
            }else if( hour == '16'){
                Today.highLight(document.querySelector('.s_16'));
    
            }else if( hour == '17'){ 
                Today.highLight(document.querySelector('.s_17'));
    
            }else if( hour == '18'){
                
                Today.highLight(document.querySelector('.s_18'));
    
            }else if( hour == '20'){   
                Today.highLight(document.querySelector('.s_20')); 
                document.querySelector('.s_21').classList.add('highlight_s');
                document.querySelector('.s_22').classList.add('highlight_s');
                document.querySelector('.h8p').classList.add('highlight_t');     
               
            }else if( hour == '21'){
                Today.highLight(document.querySelector('.s_21'));
                document.querySelector('.s_20').classList.add('highlight_s');
                document.querySelector('.s_22').classList.add('highlight_s');
                document.querySelector('.h9p').classList.add('highlight_t');
    
            }else if( hour == '22'){    
                Today.highLight(document.querySelector('.s_22'));  
                document.querySelector('.s_21').classList.add('highlight_s');
                document.querySelector('.s_20').classList.add('highlight_s');
                document.querySelector('.h10p').classList.add('highlight_t');     
               
          
    
    
            }else{
                console.log('No Highlight');
            }          

        }else if( weekday == 'Sunday'){

            const hour = dateIn.getHours();

            if (hour == '6') {
                Today.highLight(document.querySelector('.su_6'));
              
    
            }else if( hour == '7'){
                Today.highLight(document.querySelector('.su_7'));
               
    
            }else if( hour == '8'){
                Today.highLight(document.querySelector('.su_8'));
               
    
            }else if( hour == '9'){
                Today.highLight(document.querySelector('.su_9'));
               
    
            }else if( hour == '10'){
                Today.highLight(document.querySelector('.su_10'));
               
    
            }else if( hour == '11'){
                Today.highLight(document.querySelector('.su_11'));
               
    
            }else if( hour == '12' && min <= '50' ){
                Today.highLight(document.querySelector('.su_12'));
    
            }else if( hour == '13'){       
                Today.highLight(document.querySelector('.su_13'));    
               
            }else if( hour == '14'){
                Today.highLight(document.querySelector('.su_14'));
    
            }else if( hour == '15'){  
                Today.highLight(document.querySelector('.su_15'));
    
            }else if( hour == '16'){
                Today.highLight(document.querySelector('.su_16'));
    
            }else if( hour == '17'){ 
                Today.highLight(document.querySelector('.su_17'));
    
            }else if( hour == '18'){
                
                Today.highLight(document.querySelector('.su_18'));
    
            }else if( hour == '20'){   
                Today.highLight(document.querySelector('.su_20'));  
                document.querySelector('.su_21').classList.add('highlight_s');
                document.querySelector('.su_22').classList.add('highlight_s');
                document.querySelector('.h8p').classList.add('highlight_t');    
               
            }else if( hour == '21'){
                Today.highLight(document.querySelector('.su_21'));
                document.querySelector('.su_20').classList.add('highlight_s');
                document.querySelector('.su_22').classList.add('highlight_s');
                document.querySelector('.h9p').classList.add('highlight_t');
    
            }else if( hour == '22'){    
                Today.highLight(document.querySelector('.su_22'));   
                document.querySelector('.su_21').classList.add('highlight_s');
                document.querySelector('.su_20').classList.add('highlight_s');
                document.querySelector('.h10p').classList.add('highlight_t');    
               
          
    
    
            }else{
                console.log('No Highlight');
            }

        }else{
            console.log('Unexpecteed Token');
        }
    };

    static highLight(cl) {
        cl.classList.add('highlight');
    };

    static study() {
        document.querySelector('.m_9').classList.add('highlight_r');
        document.querySelector('.m_10').classList.add('highlight_r');
        document.querySelector('.m_11').classList.add('highlight_r');

        document.querySelector('.t_8').classList.add('highlight_r');
        document.querySelector('.t_9').classList.add('highlight_r');
        document.querySelector('.t_10').classList.add('highlight_r');

        document.querySelector('.th_8').classList.add('highlight_r');
        document.querySelector('.th_9').classList.add('highlight_r');

        document.querySelector('.f_8').classList.add('highlight_r');
        document.querySelector('.f_9').classList.add('highlight_r');
        document.querySelector('.f_10').classList.add('highlight_r');
    };
 


};
Today.study();
Today.tableRead(dateIn.toLocaleDateString("en-US", { weekday: "long"}));





*/