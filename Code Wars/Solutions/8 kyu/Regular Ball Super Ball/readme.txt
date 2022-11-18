====================Notes====================
This one was annoying, an 8 kyu about objects
and object properties. Figured it out, and
I guess it was kindof interesting.
====================Notes====================
Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

ball1 = new Ball();
ball2 = new Ball("super");

ball1.ballType     //=> "regular"
ball2.ballType     //=> "super"