function transmite() {
    var body = document.getElementById('intrebare').value;
    window.open('mailto:bitca.ernest@gmail.com?subject=Intrebare&body=' + body);
}