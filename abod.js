var name = prompt("اكتب اسمك:");
var enter = confirm("مرحباً بك يا " + name + "، هل تريد دخول الموقع؟");

if (enter) {
    alert("أهلاً بك في الموقع");
    document.getElementById("main-content").style.display = "block";
} else {
    alert("وداعاً!");
    document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px; font-family: sans-serif;'>عذراً، لم يتم الدخول للموقع. نتمنى زيارتك مجدداً</h1>";
}
