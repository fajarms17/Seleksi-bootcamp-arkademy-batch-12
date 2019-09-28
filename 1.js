function tampilkanBiodata(){
    let Biodata={
        name:"Fajar Muhammad Sidiq",
        age:22,
        address:"Puri Cendana Blok A17 No.25 RT.03 RW.015, Ds. Sumber Jaya, Tambun Selatan, Bekasi",
        hobbies:["Futsal","Gaming","Swimming"],
        is_married:false,
        list_school:[{
            sd:"SDIT Ulul Albab",
            year_in:"2006",
            year_out:"2009"
            },
            {
            smp:"SMPIT Al-Hassan",
            year_in:"2009",
            year_out:"2012"
            },
            {
            sma:"MA Al-Hassan",
            year_in:"2012",
            year_out:"2015"
            },
            {
            university:"Universitas Gunadarma",
            year_in:"2015",
            year_out:"2019"
            }
        ],
        skill:[{
            skill_name:"Web Developer",
            level:"Beginner"
        },
        {
            skill_name:"Mobile Developer",
            level:"Beginner"
        }
    ],
    interest_in_coding:true
       

    }
    console.log(JSON.stringify(Biodata));
    
}

tampilkanBiodata();


