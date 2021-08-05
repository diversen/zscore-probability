# zscore-probability

The following functions calculate probability from a z-score and z-score from a probability. 

See [test.js](test.js) for a couple of examples. 

Found on [https://stackoverflow.com/a/36903699/464549](https://stackoverflow.com/a/36903699/464549)

Original code comments: 

    The following JavaScript functions for calculating normal and
    chi-square probabilities and critical values were adapted by
    John Walker from C implementations
    written by Gary Perlman of Wang Institute, Tyngsboro, MA
    01879.  Both the original C code and this JavaScript edition
    are in the public domain.  */

    POZ  --  probability of normal z value

    Adapted from a polynomial approximation in:
            Ibbetson D, Algorithm 209
            Collected Algorithms of the CACM 1963 p. 616
    Note:
            This routine has six digit accuracy, so it is only useful for absolute
            z values <= 6.  For z values > to 6.0, poz() returns 0.0.

    CRITZ  --  Compute critical normal z value to
               produce given p.  We just do a bisection
               search for a value within CHI_EPSILON,
               relying on the monotonicity of pochisq().

## License

MIT © [Dennis Iversen](https://github.com/diversen)