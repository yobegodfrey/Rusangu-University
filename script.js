document.getElementById('menu-btn').addEventListener('click', function() {
    document.querySelector('nav .navigation ul').classList.add('active');
});

document.getElementById('menu-close').addEventListener('click', function() {
    document.querySelector('nav .navigation ul').classList.remove('active');
});

var typed = new Typed (".typed-text", {
    strings: ["Don't miss this chance to join Rusangu University and become part of its legacy of excellence and innovation. Apply today and secure your spot for the next intake. You can visit our website or contact our admissions office for more information on how to apply and enroll at Rusangu University. We look forward to welcoming you to our family! ^10000","Rusangu University is more than just a university. It is a place where you can discover your purpose, develop your potential, and make a difference in the world. It is a place where you can grow in faith, knowledge, and service. It is a place where you can find your home away from home. ^10000", "Are you looking for a place to pursue your academic dreams and achieve your personal goals? Do you want to join a community of learners who are passionate about making a positive impact in the world? If you answered yes to these questions, then Rusangu University is the right choice for you! ^10000", ". . . . . . . . ."],
    typedSpeed: -1,
    backSpeed: 10,
    backDelay: 1000,
    loop: true
})