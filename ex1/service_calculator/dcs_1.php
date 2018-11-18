<?php

if($_SERVER['REQUEST_METHOD']=='PUT')
{
    parse_str(file_get_contents("php://input"),$_POST);
    $num1=$_POST['num1']; ///
    $num2=$_POST['num2'];
    $num3=$_POST['num3'];
    $func=$_POST['func'];
}

else {
    if(isset($_GET['num1']))
        $num1=(int)$_GET["num1"];
    else if(isset($_POST['num1']))
        $num1=(int)$_POST["num1"];
    else $num1 = 50;

    if(isset($_GET['num2']))
        $num2=(int)$_GET["num2"];
    else if(isset($_POST['num2']))
        $num2=(int)$_POST["num2"];
    else $num2 = 50;

    if(isset($_GET['num3']))
        $num3=(int)$_GET["num3"];
    else if(isset($_POST['num3']))
        $num3=(int)$_POST["num3"];
    else $num3 = 50;


    if(isset($_GET['func']))
        $func=$_GET["func"];
    else if(isset($_POST['func']))
        $func=$_POST["func"];
    else $func = "sum";

}

        if ($func == "sum")
        {
            $res=$num1+$num2+$num3;
        }
        else if($func == "avg")
        {
            $res=($num1+$num2+$num3)/3;
        }
        else if ($func == 1)
        {
            $res=$num1*$num2*$num3;
        }
     
    

        header('Content-Type: application/json');

        
        echo json_encode($res);

?>