/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const sortedMergedArr = [...nums1, ...nums2].sort((a, b) => a - b);

  console.log(sortedMergedArr);

  const arrLength = sortedMergedArr.length;
  let midNumIndex = Math.floor(arrLength / 2);
  if (arrLength % 2 === 0) {
    midNumIndex = midNumIndex - 1;
    return (
      (sortedMergedArr[midNumIndex] + sortedMergedArr[midNumIndex + 1]) / 2
    );
  }

  console.log(sortedMergedArr[midNumIndex]);

  return sortedMergedArr[midNumIndex];
};

findMedianSortedArrays([1, 2], [3, 4]);
