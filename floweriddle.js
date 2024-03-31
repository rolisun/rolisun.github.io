var score = 0; // 初始化得分变量

    function answer1(){
        var response = prompt("有想法了吗？来试试吧！");
        if(response === "烟花"){
            alert("答对啦！小花长起来啦~");
            score += 10;
            checkScore();
            document.getElementById('guess1').classList.add('disabled');
        }
        else {
            alert("答错了，再努力一下吧！");
        }
    }

    function answer2(){
        var response = prompt("有想法了吗？来试试吧！");
        if(response === "荷花"){
            alert("答对啦！小花长起来啦~");
            score += 10;
            checkScore();
            document.getElementById('guess2').classList.add('disabled');
        }
        else {
            alert("答错了，再努力一下吧！");
        }
    }

    function answer3(){
        var response = prompt("有想法了吗？来试试吧！");
        if(response === "菊花"){
            alert("答对啦！小花长起来啦~");
            score += 10;
            checkScore();
            document.getElementById('guess3').classList.add('disabled');
        }
        else {
            alert("答错了，再努力一下吧！");
        }
    }

    function answer4(){
        var response = prompt("有想法了吗？来试试吧！");
        if(response === "梅花"){
            alert("答对啦！小花长起来啦~");
            score += 10;
            checkScore();
            document.getElementById('guess4').classList.add('disabled');
        }
        else {
            alert("答错了，再努力一下吧！");
        }
    }

    function answer5(){
        var response = prompt("有想法了吗？来试试吧！");
        if(response === "心花"){
            alert("答对啦！小花长起来啦~");
            score += 10;
            checkScore();
            document.getElementById('guess5').classList.add('disabled');
        }
        else {
            alert("答错了，再努力一下吧！");
        }
    }

    function checkScore(){
      var textDisplay = document.getElementById("textDisplay");
        if (score == 10) {
            document.getElementById('image1').style.display = 'none';
            document.getElementById('image2').style.display = 'block';
        }
        else if (score == 20) {
            document.getElementById('image2').style.display = 'none';
            document.getElementById('image3').style.display = 'block';
        }
        else if (score == 30) {
            document.getElementById('image3').style.display = 'none';
            document.getElementById('image4').style.display = 'block';
        }
        else if (score == 40) {
            document.getElementById('image4').style.display = 'none';
            document.getElementById('image5').style.display = 'block';
        }
        else if (score == 50) {
            document.getElementById('image5').style.display = 'none';
            document.getElementById('image6').style.display = 'block';
            result.style.display = "block";
        }
    }
