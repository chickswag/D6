<?php


class Fibonacci
{
     public function fibonacci_sequence($max){
         $number1=0;
         $number2=1;
         for($i=0;$i<$max;$i++){
             if($i<=1){
                 $new=$i;
             }
             else  {
                 $new=$number1 + $number2;
                 $number1=$number2;
                 $number2=$new;
             }

             echo  $new."   ";
         }
     }

}