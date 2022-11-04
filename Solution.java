
import java.util.Arrays;

public class Solution {

    private static final int NO_COMMON_ELEMENT_FOR_ALL_ROWS = -1;

    public int smallestCommonElement(int[][] matrix) {
        final int totalRows = matrix.length;
        final int totalColumns = matrix[0].length;

        for (int column = 0; column < totalColumns; ++column) {

            boolean commonElementFound = true;
            for (int row = 1; row < totalRows && commonElementFound; ++row) {
                if (matrix[row][totalColumns - 1] < matrix[0][column]) {
                    return NO_COMMON_ELEMENT_FOR_ALL_ROWS;
                }
                commonElementFound = Arrays.binarySearch(matrix[row], matrix[0][column]) >= 0;
            }
            if (commonElementFound) {
                return matrix[0][column];
            }
        }
        return NO_COMMON_ELEMENT_FOR_ALL_ROWS;
    }
}
