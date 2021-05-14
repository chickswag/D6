<?php

require 'Fibonacci.php';
require 'NumberFactor.php';

// get the number factor
$number = 7;
$test = new NumberFactor();
$test->calculate_factor($number);

// fibonacci sequence
$max = 10;
$testfibonacci = new Fibonacci();
$testfibonacci->fibonacci_sequence($max);