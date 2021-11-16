
  
const authour = {
name:'Peter rodrigues',
surname:'Butao',
website:'www.peterbutao.netlify.app',
mail:'peterethanbutao@gmail.com',
contant:{
        airtel:'0991894703',
        tnm:'0880164455'
    },
address:{
        country:'Malawi',
        city:'Blantyre',
        area:'area 12, machinjiri'
    }
};

console.log('**** Developer details ****')

console.log(`name   : ${authour.name} ${authour.surname}`);
console.log(`mail   : ${authour.mail} `);
console.log(`website: ${authour.website} `);
console.log(`contact: ${authour.contant.tnm} `);
console.log(`address: ${authour.address.area}, ${authour.address.city}, ${authour.address.country}`);
