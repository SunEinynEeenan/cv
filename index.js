



const post = [
    {
        name: "haha", 
        embedUrl: "link", 
        role: "songwriter; mixing engineer"
    },
    {
        name: "haha", 
        embedUrl: "link", 
        role: "songwriter; mixing engineer"
    }
]


console.log(post[0].name)


// let item = "nill";

post.forEach(stylePost)


function stylePost(item){
    if item.role = "songwriter"{
        console.log("songwriter")
    } else if item.role == "songwriter; mixing engineer"{
        console.log("songwriter; mixing engineer")
    }else if item.role == "songwriter; mixing engineer; mastering engineer"{
        console.log("songwriter; mixing engineer; mastering engineer")
    }else if item.role == "mixing engineer"{
        console.log("mixing engineer")
    }else if item.role == "mixing engineer; mastering engineer"{
        console.log("mixing engineer; mastering engineer")
    }
    else if item.role == "mastering engineer"{
        console.log("mastering engineer")
    }
}






// document.getElementById("demo").innerHTML = person.firstName;

