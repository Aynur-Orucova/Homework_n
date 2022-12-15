


function smt(){
    var width = document.getElementById('eni').value
    var height = document.getElementById('uzunu').value
    var reng = document.getElementById('reng').value
    var position = document.getElementById('position').value
    var top = document.getElementById('top').value
    var left = document.getElementById('left').value
    var tran = document.getElementById('tran').value
    var border = document.getElementById('bord').value
    var bordcol = document.getElementById('bordcol').value
    // document.getElementById('main').style.backgroundImage = url('Mabel.jpg')
    document.getElementById('main').style.borderWidth = border
    document.getElementById('main').style.borderColor = bordcol 
    document.getElementById('main').style.transition = tran
    document.getElementById('main').style.left = left
    document.getElementById('main').style.top= top 
    document.getElementById('main').style.width = width
    document.getElementById('main').style.position = position
    document.getElementById('main').style.height = height
    document.getElementById('main').style.background = reng
    
}
