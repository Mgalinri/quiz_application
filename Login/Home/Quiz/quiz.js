var points=0;
function evaluate_quiz()
{
    let ele = document.getElementsByName("question_1");

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            if(ele[i].value.toString()=="rome")
            {
                //alert(ele[i].value);
                points=points+1;
                break;
            }
        }

    }
    ele = document.getElementsByName("question_2");

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            if(ele[i].value.toString()=="zooey")
            {
                //alert(ele[i].value);
                points=points+1;
                break;
            }
        }

    }
    ele = document.getElementsByName("question_3");

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            if(ele[i].value.toString()=="grand")
            {
                //alert(ele[i].value);
                points=points+1;
                break;
            }
        }

    }
    ele = document.getElementsByName("question_4");

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            if(ele[i].value.toString()=="5,525")
            {
                //alert(ele[i].value);
                points=points+1;
                break;
            }
        }

    }
    ele = document.getElementsByName("question_5");

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            if(ele[i].value.toString()=="1924")
            {
                //alert(ele[i].value);
                points=points+1;
                break;
            }
        }

    }
    ele = document.getElementsByName("question_6");

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            if(ele[i].value.toString()=="tennessee")
            {
                //alert(ele[i].value);
                points=points+1;
                break;
            }
        }

    }
    ele = document.getElementsByName("question_7");

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            if(ele[i].value.toString()=="1960")
            {
                //alert(ele[i].value);
                points=points+1;
                break;
            }
        }

    }
    ele = document.getElementsByName("question_8");

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            if(ele[i].value.toString()=="louvre")
            {
                //alert(ele[i].value);
                points=points+1;
                break;
            }
        }

    }
    ele = document.getElementsByName("question_9");

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            if(ele[i].value.toString()=="madrid")
            {
                //alert(ele[i].value);
                points=points+1;
                break;
            }
        }

    }
    ele = document.getElementsByName("question_10");

    for(let i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        {
            if(ele[i].value.toString()=="etna")
            {
                //alert(ele[i].value);
                points=points+1;
                break;
            }
        }

    }
    alert("You have scored:"+points+"pts");
}
