
#include <vector>
using namespace std;

class Solution {
    
    inline static const int NO_COMMON_ELEMENT_FOR_ALL_ROWS = -1;
    
public:
    int smallestCommonElement(const vector<vector<int>>& matrix)const {
        const size_t totalRows = matrix.size();
        const size_t totalColumns = matrix[0].size();

        for (size_t column = 0; column < totalColumns; ++column) {

            bool commonElementFound = true;
            for (size_t row = 1; row < totalRows && commonElementFound; ++row) {
                if (matrix[row][totalColumns - 1] < matrix[0][column]) {
                    return NO_COMMON_ELEMENT_FOR_ALL_ROWS;
                }
                //C++20: std::ranges::binary_search(matrix[row], matrix[0][column]);
                commonElementFound = binary_search(matrix[row].begin(), matrix[row].end(), matrix[0][column]);
            }
            if (commonElementFound) {
                return matrix[0][column];
            }
        }
        return NO_COMMON_ELEMENT_FOR_ALL_ROWS;
    }
};
