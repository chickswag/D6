<?php


class NumberFactor
{
    public function calculate_factor($number){

        $max =300;
        $sum = 0;
        for ($i = 1; $i <= $max; $i++) {
            $sum += $number;
            printf("%d -> %d\n", $i, $sum);
            printf("--------------\n");
        }
    }

}