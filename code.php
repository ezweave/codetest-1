<?php

class Code {
    // Returns "Hello World!"
    static function helloWorld() {
        throw new Error("Not Implemented");
    }

    // Take a single-spaced <sentence>, and capitalize every <n>th word starting with <offset>.
    static function capitalizeEveryNthWord($sentence, $offset, $n) {
        throw new Error("Not Implemented");
    }
    
    // Determine if a number is prime
    static function isPrime($n) {
        throw new Error("Not Implemented");
    }
    
    // Calculate the golden ratio.
    // Given two numbers a and b with a > b > 0, the ratio is b / a.
    // Let c = a + b, then the ratio c / b is closer to the golden ratio.
    // Let d = b + c, then the ratio d / c is closer to the golden ratio. 
    // Let e = c + d, then the ratio e / d is closer to the golden ratio.
    // If you continue this process, the result will trend towards the golden ratio.
    static function goldenRatio($a, $b) {
        throw new Error("Not Implemented");
    }

    // Give the nth Fibonacci number
    // Starting with 0, 1, 1, 2, ... a Fibonacci number is the sum of the previous two.
    static function fibonacci($n) {
        throw new Error("Not Implemented");
    }

    // Give the square root of a number
    // Using a binary search algorithm, search for the square root of a given number.
    // Do not use the built-in square root function.
    static function squareRoot($n) {
        throw new Error("Not Implemented");
    }
}