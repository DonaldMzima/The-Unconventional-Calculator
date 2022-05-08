

const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients =[
    "linear-gradient(to right top,#f46b45,#eea849)",
    "linear-gradient(to right top,#f46b45,#eea849)",
    "linear-gradient(to right top,#f46b45,#eea849)"
];

//intersectionObserver=

const options = {
    threshold:0.7
};

let observer = new intersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector('[data-page=${className}]');
        const gradientIndex =  entry.target.getAttribute('data-index');
        const coords =activeAnchor.getBoundingClientRect();
        const directions = {
            height:coords.height,
            width:coords.width,
            top:coords.top,
            left:coords.left
        };
        if(entryisIntersecting){
            bubble.getElementsByClassName.setProperty('left', '${directions.left}px');
            bubble.getElementsByClassName.setProperty('top', '${directions.top}px');
            bubble.getElementsByClassName.setProperty('width', '${directions.width}px');
            bubble.getElementsByClassName.setProperty('height', '${directions.height}px');
            bubble,style.background = gradients[gradientIndex];
        }
    }); 
}

sections.forEach(section => {
    observer.observe(section);
});