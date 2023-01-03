==================================Notes==================================
This was another fun one. I always enjoy the kyus that let me employ my
math experience. This time I had to recall my time in linear algebra and
calculus. I used a different method of finding the determinant than the
directions suggested. Instead of multiplying out the determinant through
many levels of mini 4 by 4 matrices and a sign matrix, I used Gaussian 
Elimination to find the Row Echelon Form and then multiplied the main 
diagonal taking into account the times I swapped rows in order to keep
track of the determinant's sign. The only hiccup was that the program
calculates in decimal form and not fractional, thus some values can be
off in the billionth place or beyond. This was corrected with a simple
rounding method, but that also means my code will only work if the
matrix contains only integers.
==================================Notes==================================
Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

A 1x1 matrix |a| has determinant a.

A 2x2 matrix [ [a, b], [c, d] ] or

|a  b|
|c  d|
has determinant: a*d - b*c.

The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.

For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

|a b c|  
|d e f|  
|g h i|  
the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:

|- - -|
|- e f|
|- h i|  
Note the alternation of signs.

The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:

det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)