let nav = false;

function showNav()
{
    if(nav){
        document.getElementById("nav").classList = "";
        nav = false;
    } else {
        document.getElementById("nav").classList = "floatingNav";
        nav = true;
    }
}

function hideNav(){
    document.getElementById("nav").classList = "";
    nav = false;
}

function skillsAnimation(){
    let skills = document.getElementById('Skills');
    let distance = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance >= 300) {
        let listSkills = document.getElementsByClassName('percent');
        for (let i = 0; i < listSkills.length; i++) {
            let className = 'skill-'+ (i+1);
            listSkills[i].classList.add(className);
        }
    }
    
    
}
window.onscroll = function(){
    skillsAnimation();
}