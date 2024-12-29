// DSAProgress.jsx
import React, { useState, useEffect, useRef } from "react";
import "../dsaProgress.css";
const lectures = [
    // LECTURE 1 - 8 (no topics/questions)
    {
        title: "Lecture 1",
        url: "https://www.youtube.com/watch?v=WQoB2z67hvY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=1&t=2s",
        videoEmbed: "https://www.youtube.com/embed/WQoB2z67hvY",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 2",
        url: "https://www.youtube.com/watch?v=t6zLJOCVqD0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=2",
        videoEmbed: "https://www.youtube.com/embed/t6zLJOCVqD0",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 3",
        url: "https://www.youtube.com/watch?v=WR31ByTzAVQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=3",
        videoEmbed: "https://www.youtube.com/embed/WR31ByTzAVQ",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 4",
        url: "https://www.youtube.com/watch?v=dr-pLeJBr38&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=4",
        videoEmbed: "https://www.youtube.com/embed/dr-pLeJBr38",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 5",
        url: "https://www.youtube.com/watch?v=yjdQHb2elqI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=5",
        videoEmbed: "https://www.youtube.com/embed/yjdQHb2elqI",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 6",
        url: "https://www.youtube.com/watch?v=bWrsk0QizEk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=6",
        videoEmbed: "https://www.youtube.com/embed/bWrsk0QizEk",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 7",
        url: "https://www.youtube.com/watch?v=0fwrMYPcGQ0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=7",
        videoEmbed: "https://www.youtube.com/embed/0fwrMYPcGQ0",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 8",
        url: "https://www.youtube.com/watch?v=8nNqk2NPbRA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=8",
        videoEmbed: "https://www.youtube.com/embed/8nNqk2NPbRA",
        topics: [],
        questions: [],
    },
    // LECTURE 9
    {
        title: "Lecture 9",
        url: "https://www.youtube.com/watch?v=sNrLlmOIn-c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=9",
        videoEmbed: "https://www.youtube.com/embed/sNrLlmOIn-c",
        topics: ["Array", "Dynamic Programming", "Prefix Sum", "Divide & Conquer"],
        questions: [
            {
                label: "LeetCode 121 - Best Time to Buy and Sell Stock",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            },
            {
                label: "LeetCode 53 - Maximum Subarray",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "LeetCode 123 - Best Time to Buy and Sell Stock III",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
            },
            {
                label: "LeetCode 188 - Best Time to Buy and Sell Stock IV",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
            },
            {
                label: "LeetCode 238 - Product of Array Except Self",
                url: "https://leetcode.com/problems/product-of-array-except-self/",
            },
        ],
    },
    // LECTURE 10
    {
        title: "Lecture 10",
        url: "https://www.youtube.com/watch?v=oVa8DfUDKTw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=10",
        videoEmbed: "https://www.youtube.com/embed/oVa8DfUDKTw",
        topics: ["Array", "Hash Table", "Prefix Sum"],
        questions: [
            {
                label: "LeetCode 1207 - Unique Number of Occurrences",
                url: "https://leetcode.com/problems/unique-number-of-occurrences/",
            },
            {
                label: "LeetCode 442 - Find All Duplicates in an Array",
                url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
            },
            {
                label: "LeetCode 448 - Find All Numbers Disappeared in an Array",
                url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
            },
            {
                label: "LeetCode 2615 - Sum of Distances",
                url: "https://leetcode.com/problems/sum-of-distances/",
            },
            {
                label:
                    "LeetCode 1959 - Minimum Total Space Wasted with k Resizing Operations",
                url: "https://leetcode.com/problems/minimum-total-space-wasted-with-k-resizing-operations/description/",
            },
        ],
    },
    // LECTURE 11
    {
        title: "Lecture 11",
        url: "https://www.youtube.com/watch?v=QovOdd80A4s&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=11",
        videoEmbed: "https://www.youtube.com/embed/QovOdd80A4s",
        topics: ["Array", "Hash Table"],
        questions: [
            {
                label: "LeetCode 1 - Two Sum",
                url: "https://leetcode.com/problems/two-sum/",
            },
        ],
    },
    // LECTURE 12
    {
        title: "Lecture 12",
        url: "https://www.youtube.com/watch?v=YJeoQBevNVo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=12",
        videoEmbed: "https://www.youtube.com/embed/YJeoQBevNVo",
        topics: [
            "Array",
            "Prefix Sum",
            "Hash Table",
            "Binary Search",
            "Interactive",
            "Dynamic Programming",
            "Greedy",
        ],
        questions: [
            {
                label: "LeetCode 724 - Find Pivot Index",
                url: "https://leetcode.com/problems/find-pivot-index/",
            },
            {
                label: "LeetCode 560 - Subarray Sum Equals K",
                url: "https://leetcode.com/problems/subarray-sum-equals-k/",
            },
            {
                label: "LeetCode 2270 - Number of Ways to Split Array",
                url: "https://leetcode.com/problems/number-of-ways-to-split-array/",
            },
            {
                label: "LeetCode 2574 - Left and Right Sum Differences",
                url: "https://leetcode.com/problems/left-and-right-sum-differences/",
            },
            {
                label: "LeetCode 852 - Peak Index in a Mountain Array",
                url: "https://leetcode.com/problems/peak-index-in-a-mountain-array/",
            },
            {
                label: "LeetCode 162 - Find Peak Element",
                url: "https://leetcode.com/problems/find-peak-element/",
            },
            {
                label: "LeetCode 1095 - Find in Mountain Array",
                url: "https://leetcode.com/problems/find-in-mountain-array/",
            },
            {
                label:
                    "LeetCode 1671 - Minimum Number of Removals to Make Mountain Array",
                url: "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/",
            },
        ],
    },
    // LECTURE 13 - 59 (no special topics unless in original text)
    {
        title: "Lecture 13",
        url: "https://www.youtube.com/watch?v=zD2Jg3alZV8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=13",
        videoEmbed: "https://www.youtube.com/embed/zD2Jg3alZV8",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 14",
        url: "https://www.youtube.com/watch?v=6z2HK4o8qcU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=14",
        videoEmbed: "https://www.youtube.com/embed/6z2HK4o8qcU",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 15",
        url: "https://www.youtube.com/watch?v=YTTdLgyqOLY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=15",
        videoEmbed: "https://www.youtube.com/embed/YTTdLgyqOLY",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 16",
        url: "https://www.youtube.com/watch?v=UdO2NeHB46c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=16",
        videoEmbed: "https://www.youtube.com/embed/UdO2NeHB46c",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 17",
        url: "https://www.youtube.com/watch?v=zOhUavxlzw4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=18",
        videoEmbed: "https://www.youtube.com/embed/zOhUavxlzw4",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 18",
        url: "https://www.youtube.com/watch?v=7kIVfVY6Axk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=19",
        videoEmbed: "https://www.youtube.com/embed/7kIVfVY6Axk",
        topics: [],
        questions: [],
    },
    // LECTURE 19
    {
        title: "Lecture 19",
        url: "https://www.youtube.com/watch?v=WgMPrLX-zsA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=20",
        videoEmbed: "https://www.youtube.com/embed/WgMPrLX-zsA",
        topics: ["Sort (Will be covered in next Lectures)"],
        questions: [],
    },
    // LECTURE 20
    {
        title: "Lecture 20",
        url: "https://www.youtube.com/watch?v=MPvr-LmaZmA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=21",
        videoEmbed: "https://www.youtube.com/embed/MPvr-LmaZmA",
        topics: ["Array", "Two Pointers", "Sorting", "Simulation"],
        questions: [
            {
                label: "LeetCode 88 - Merge Sorted Array",
                url: "https://leetcode.com/problems/merge-sorted-array/",
            },
            {
                label: "LeetCode 977 - Squares of a Sorted Array",
                url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
            },
            {
                label: "LeetCode 986 - Interval List Intersections",
                url: "https://leetcode.com/problems/interval-list-intersections/",
            },
            {
                label: "LeetCode 283 - Move Zeroes",
                url: "https://leetcode.com/problems/move-zeroes/",
            },
            {
                label: "LeetCode 2460 - Apply Operations to an Array",
                url: "https://leetcode.com/problems/apply-operations-to-an-array/",
            },
            {
                label: "LeetCode 27 - Remove Element",
                url: "https://leetcode.com/problems/remove-element/",
            },
        ],
    },
    // LECTURE 21
    {
        title: "Lecture 21",
        url: "https://www.youtube.com/watch?v=Z7_nMTHROZo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=22",
        videoEmbed: "https://www.youtube.com/embed/Z7_nMTHROZo",
        topics: [
            "Array",
            "Math",
            "Two Pointers",
            "Sorting",
            "Number Theory",
            "String",
        ],
        questions: [
            {
                label: "LeetCode 189 - Rotate Array",
                url: "https://leetcode.com/problems/rotate-array/",
            },
            {
                label: "LeetCode 2607 - Make K-Subarray Sums Equal",
                url: "https://leetcode.com/problems/make-k-subarray-sums-equal/",
            },
            {
                label: "LeetCode 1752 - Check if Array Is Sorted and Rotated",
                url: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
            },
            {
                label: "LeetCode 2124 - Check if All A's Appear Before All B's",
                url: "https://leetcode.com/problems/check-if-all-as-appear-before-all-bs/",
            },
        ],
    },
    // LECTURE 22
    {
        title: "Lecture 22",
        url: "https://www.youtube.com/watch?v=Wdjr6uoZ0e0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=24",
        videoEmbed: "https://www.youtube.com/embed/Wdjr6uoZ0e0",
        topics: [
            "Two Pointers",
            "String",
            "Math",
            "Array",
            "Brainteaser",
            "Enumeration",
            "Greedy",
            "Dynamic Programming",
            "Backtracking",
            "Bit Manipulation",
            "Bitmask",
            "Rolling Hash",
            "String Matching",
            "Hash Function",
            "Sliding Window",
            "Hash Table",
            "Stack",
            "Simulation",
        ],
        questions: [
            {
                label: "LeetCode 344 - Reverse String",
                url: "https://leetcode.com/problems/reverse-string/",
            },
            {
                label: "LeetCode 345 - Reverse Vowels of a String",
                url: "https://leetcode.com/problems/reverse-vowels-of-a-string/",
            },
            {
                label: "LeetCode 541 - Reverse String II",
                url: "https://leetcode.com/problems/reverse-string-ii/",
            },
            {
                label: "LeetCode 9 - Palindrome Number",
                url: "https://leetcode.com/problems/palindrome-number/",
            },
            {
                label: "LeetCode 2217 - Find Palindrome With Fixed Length",
                url: "https://leetcode.com/problems/find-palindrome-with-fixed-length/",
            },
            {
                label: "LeetCode 2396 - Strictly Palindromic Number",
                url: "https://leetcode.com/problems/strictly-palindromic-number/",
            },
            {
                label: "LeetCode 2843 - Count Symmetric Integers",
                url: "https://leetcode.com/problems/count-symmetric-integers/",
            },
            {
                label: "LeetCode 125 - Valid Palindrome",
                url: "https://leetcode.com/problems/valid-palindrome/",
            },
            {
                label: "LeetCode 680 - Valid Palindrome II",
                url: "https://leetcode.com/problems/valid-palindrome-ii/",
            },
            {
                label: "LeetCode 2108 - Find First Palindromic String in the Array",
                url: "https://leetcode.com/problems/find-first-palindromic-string-in-the-array/",
            },
            {
                label:
                    "LeetCode 2002 - Maximum Product of the Length of Two Palindromic Subsequences",
                url: "https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/",
            },
            {
                label: "LeetCode 1910 - Remove All Occurrences of a Substring",
                url: "https://leetcode.com/problems/remove-all-occurrences-of-a-substring/",
            },
            {
                label: "LeetCode 2430 - Maximum Deletions on a String",
                url: "https://leetcode.com/problems/maximum-deletions-on-a-string/",
            },
            {
                label: "LeetCode 214 - Shortest Palindrome",
                url: "https://leetcode.com/problems/shortest-palindrome/",
            },
            {
                label: "LeetCode 1392 - Longest Happy Prefix",
                url: "https://leetcode.com/problems/longest-happy-prefix/",
            },
            {
                label: "LeetCode 567 - Permutation in String",
                url: "https://leetcode.com/problems/permutation-in-string/",
            },
            {
                label: "LeetCode 438 - Find All Anagrams in a String",
                url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
            },
            {
                label: "LeetCode 76 - Minimum Window Substring",
                url: "https://leetcode.com/problems/minimum-window-substring/",
            },
            {
                label:
                    "LeetCode 1047 - Remove All Adjacent Duplicates In String",
                url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
            },
            {
                label:
                    "LeetCode 1209 - Remove All Adjacent Duplicates in String II",
                url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/",
            },
            {
                label: "LeetCode 2390 - Removing Stars From a String",
                url: "https://leetcode.com/problems/removing-stars-from-a-string/",
            },
            {
                label: "LeetCode 2716 - Minimize String Length",
                url: "https://leetcode.com/problems/minimize-string-length/",
            },
        ],
    },
    // LECTURE 23
    {
        title: "Lecture 23",
        url: "https://www.youtube.com/watch?v=1CdolnvxLs0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=25",
        videoEmbed: "https://www.youtube.com/embed/1CdolnvxLs0",
        topics: [
            "Array",
            "Math",
            "Matrix",
            "Binary Search",
            "Divide and Conquer",
            "String",
        ],
        questions: [
            {
                label: "LeetCode 48 - Rotate Image",
                url: "https://leetcode.com/problems/rotate-image/",
            },
            {
                label:
                    "LeetCode 1886 - Determine Whether Matrix Can Be Obtained By Rotation",
                url: "https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/",
            },
            {
                label: "LeetCode 74 - Search a 2D Matrix",
                url: "https://leetcode.com/problems/search-a-2d-matrix/",
            },
            {
                label: "LeetCode 240 - Search a 2D Matrix II",
                url: "https://leetcode.com/problems/search-a-2d-matrix-ii/",
            },
            {
                label:
                    "LeetCode 2468 - Split Message Based on Limit",
                url: "https://leetcode.com/problems/split-message-based-on-limit/",
            },
        ],
    },
    // LECTURE 24
    {
        title: "Lecture 24",
        url: "https://www.youtube.com/watch?v=KdePjukNs98&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=26",
        videoEmbed: "https://www.youtube.com/embed/KdePjukNs98",
        topics: [
            "Array",
            "Math",
            "Enumeration",
            "Number Theory",
            "Dynamic Programming",
            "Breadth-First Search",
            "Hash Table",
            "Heap (Priority Queue)",
        ],
        questions: [
            {
                label: "LeetCode 204 - Count Primes",
                url: "https://leetcode.com/problems/count-primes/",
            },
            {
                label: "LeetCode 279 - Perfect Squares",
                url: "https://leetcode.com/problems/perfect-squares/",
            },
            {
                label: "LeetCode 263 - Ugly Number",
                url: "https://leetcode.com/problems/ugly-number/",
            },
            {
                label: "LeetCode 264 - Ugly Number II",
                url: "https://leetcode.com/problems/ugly-number-ii/",
            },
            {
                label: "LeetCode 2427 - Number of Common Factors",
                url: "https://leetcode.com/problems/number-of-common-factors/",
            },
            {
                label:
                    "LeetCode 2761 - Prime Pairs With Target Sum",
                url: "https://leetcode.com/problems/prime-pairs-with-target-sum/",
            },
        ],
    },
    // LECTURE 25 - 59 (no special topics unless in original text)
    {
        title: "Lecture 25",
        url: "https://www.youtube.com/watch?v=YHwEIfrXZgE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=28",
        videoEmbed: "https://www.youtube.com/embed/YHwEIfrXZgE",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 26",
        url: "https://www.youtube.com/watch?v=rlpw7oi-bpE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=29",
        videoEmbed: "https://www.youtube.com/embed/rlpw7oi-bpE",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 27",
        url: "https://www.youtube.com/watch?v=P0UsAxtXq2Y&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=30",
        videoEmbed: "https://www.youtube.com/embed/P0UsAxtXq2Y",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 28",
        url: "https://www.youtube.com/watch?v=MMO2c57XHzM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=31",
        videoEmbed: "https://www.youtube.com/embed/MMO2c57XHzM",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 29",
        url: "https://www.youtube.com/watch?v=LlqgWQgm58g&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=32",
        videoEmbed: "https://www.youtube.com/embed/LlqgWQgm58g",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 30",
        url: "https://www.youtube.com/watch?v=0TEvaAiqo8Y&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=33",
        videoEmbed: "https://www.youtube.com/embed/0TEvaAiqo8Y",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 31",
        url: "https://www.youtube.com/watch?v=_-2u4EPHD88&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=34",
        videoEmbed: "https://www.youtube.com/embed/_-2u4EPHD88",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 32",
        url: "https://www.youtube.com/watch?v=zg8Y1oE4qYQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=35",
        videoEmbed: "https://www.youtube.com/embed/zg8Y1oE4qYQ",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 33",
        url: "https://www.youtube.com/watch?v=UntSI7G5h20&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=36",
        videoEmbed: "https://www.youtube.com/embed/UntSI7G5h20",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 34",
        url: "https://www.youtube.com/watch?v=WyY2Af3k1xI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=37",
        videoEmbed: "https://www.youtube.com/embed/WyY2Af3k1xI",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 35",
        url: "https://www.youtube.com/watch?v=cdHEpbBVjRM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=38",
        videoEmbed: "https://www.youtube.com/embed/cdHEpbBVjRM",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 36",
        url: "https://www.youtube.com/watch?v=sNaHN4tZmRk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=40",
        videoEmbed: "https://www.youtube.com/embed/sNaHN4tZmRk",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 37",
        url: "https://www.youtube.com/watch?v=V0IgCltYgg4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=41",
        videoEmbed: "https://www.youtube.com/embed/V0IgCltYgg4",
        topics: [],
        questions: [
            {
                label: "Subsets (#78)",
                url: "https://leetcode.com/problems/subsets/",
            },
            {
                label: "Subsets II (#90)",
                url: "https://leetcode.com/problems/subsets-ii/",
            },
            {
                label: "Letter Case Permutation (#784)",
                url: "https://leetcode.com/problems/letter-case-permutation/",
            },
            {
                label:
                    "The Number of Passengers in Each Bus I (#1982)",
                url: "https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/",
            },
            {
                label:
                    "The Number of Good Subsets (#2044)",
                url: "https://leetcode.com/problems/the-number-of-good-subsets/",
            },
        ],
    },
    {
        title: "Lecture 38",
        url: "https://www.youtube.com/watch?v=tWnHbSHwNmA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=42",
        videoEmbed: "https://www.youtube.com/embed/tWnHbSHwNmA",
        topics: [],
        questions: [
            {
                label:
                    "Letter Combinations of a Phone Number (#17)",
                url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
            },
            {
                label: "Generate Parentheses (#22)",
                url: "https://leetcode.com/problems/generate-parentheses/",
            },
            {
                label: "Combination Sum (#39)",
                url: "https://leetcode.com/problems/combination-sum/",
            },
            {
                label: "Binary Watch (#401)",
                url: "https://leetcode.com/problems/binary-watch/",
            },
            {
                label:
                    "Count Nodes Equal to Sum of Descendants (#3014)",
                url: "https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants/",
            },
        ],
    },
    {
        title: "Lecture 39",
        url: "https://www.youtube.com/watch?v=va3NEycUxsg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=43",
        videoEmbed: "https://www.youtube.com/embed/va3NEycUxsg",
        topics: [],
        questions: [
            {
                label: "Permutations (#46)",
                url: "https://leetcode.com/problems/permutations/",
            },
            {
                label: "Permutations II (#47)",
                url: "https://leetcode.com/problems/permutations-ii/",
            },
            {
                label: "Next Permutation (#31)",
                url: "https://leetcode.com/problems/next-permutation/",
            },
            {
                label: "Combinations (#77)",
                url: "https://leetcode.com/problems/combinations/",
            },
            {
                label: "Permutation Sequence (#60)",
                url: "https://leetcode.com/problems/permutation-sequence/",
            },
        ],
    },
    {
        title: "Lecture 40",
        url: "https://www.youtube.com/watch?v=GqtyVD-x_jY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=44",
        videoEmbed: "https://www.youtube.com/embed/GqtyVD-x_jY",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 41",
        url: "https://www.youtube.com/watch?v=BYCeh76OASc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=45",
        videoEmbed: "https://www.youtube.com/embed/BYCeh76OASc",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 42",
        url: "https://www.youtube.com/watch?v=i_5pvt7ag7E&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=46",
        videoEmbed: "https://www.youtube.com/embed/i_5pvt7ag7E",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 43",
        url: "https://www.youtube.com/watch?v=b3GccK5_KSQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=47",
        videoEmbed: "https://www.youtube.com/embed/b3GccK5_KSQ",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 44",
        url: "https://www.youtube.com/watch?v=q8gdBn9RPeI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=48",
        videoEmbed: "https://www.youtube.com/embed/q8gdBn9RPeI",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 45",
        url: "https://www.youtube.com/watch?v=vqS1nVQdCJM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=49",
        videoEmbed: "https://www.youtube.com/embed/vqS1nVQdCJM",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 46",
        url: "https://www.youtube.com/watch?v=fi2vh0nQLi0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=51",
        videoEmbed: "https://www.youtube.com/embed/fi2vh0nQLi0",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 47",
        url: "https://www.youtube.com/watch?v=VxOFflTXlXo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=52",
        videoEmbed: "https://www.youtube.com/embed/VxOFflTXlXo",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 48",
        url: "https://www.youtube.com/watch?v=7pgs-wT5d4c&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=53",
        videoEmbed: "https://www.youtube.com/embed/7pgs-wT5d4c",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 49",
        url: "https://www.youtube.com/watch?v=ogmBt6f9hw8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=54",
        videoEmbed: "https://www.youtube.com/embed/ogmBt6f9hw8",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 50",
        url: "https://www.youtube.com/watch?v=aD7mBVnKFEU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=55",
        videoEmbed: "https://www.youtube.com/embed/aD7mBVnKFEU",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 51",
        url: "https://www.youtube.com/watch?v=HiRlTPf9aCg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=56",
        videoEmbed: "https://www.youtube.com/embed/HiRlTPf9aCg",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 52",
        url: "https://www.youtube.com/watch?v=83mPr0i56Gg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=57",
        videoEmbed: "https://www.youtube.com/embed/83mPr0i56Gg",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 53",
        url: "https://www.youtube.com/watch?v=rM5EEA_rbNY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=58",
        videoEmbed: "https://www.youtube.com/embed/rM5EEA_rbNY",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 54",
        url: "https://www.youtube.com/watch?v=_6COl6V6mng&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=59",
        videoEmbed: "https://www.youtube.com/embed/_6COl6V6mng",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 55",
        url: "https://www.youtube.com/watch?v=BmZnJehDzyU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=60",
        videoEmbed: "https://www.youtube.com/embed/BmZnJehDzyU",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 56",
        url: "https://www.youtube.com/watch?v=lJLcqDsmYfg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=61",
        videoEmbed: "https://www.youtube.com/embed/lJLcqDsmYfg",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 57",
        url: "https://www.youtube.com/watch?v=9u2BJfmWNEg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=62",
        videoEmbed: "https://www.youtube.com/embed/9u2BJfmWNEg",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 58",
        url: "https://www.youtube.com/watch?v=lrSXKLmnMV8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=63",
        videoEmbed: "https://www.youtube.com/embed/lrSXKLmnMV8",
        topics: [],
        questions: [],
    },
    {
        title: "Lecture 59",
        url: "https://www.youtube.com/watch?v=OpwYmEBcPh0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=64",
        videoEmbed: "https://www.youtube.com/embed/OpwYmEBcPh0",
        topics: [],
        questions: [],
    },
];

// ADDITIONAL SECTIONS AFTER LECTURES
const additionalSections = [
    {
        sectionTitle: "Pointer",
        questions: [
            {
                label: "LeetCode 19 - Remove Nth Node From End of List",
                url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
            },
            {
                label: "LeetCode 206 - Reverse Linked List",
                url: "https://leetcode.com/problems/reverse-linked-list/",
            },
            {
                label: "LeetCode 21 - Merge Two Sorted Lists",
                url: "https://leetcode.com/problems/merge-two-sorted-lists/",
            },
            {
                label: "LeetCode 234 - Palindrome Linked List",
                url: "https://leetcode.com/problems/palindrome-linked-list/",
            },
            {
                label: "LeetCode 203 - Remove Linked List Elements",
                url: "https://leetcode.com/problems/remove-linked-list-elements/",
            },
            {
                label: "LeetCode 328 - Odd Even Linked List",
                url: "https://leetcode.com/problems/odd-even-linked-list/",
            },
            {
                label: "LeetCode 25 - Reverse Nodes in k-Group",
                url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
            },
            {
                label: "LeetCode 24 - Swap Nodes in Pairs",
                url: "https://leetcode.com/problems/swap-nodes-in-pairs/",
            },
            {
                label: "LeetCode 61 - Rotate List",
                url: "https://leetcode.com/problems/rotate-list/",
            },
            {
                label: "LeetCode 2 - Add Two Numbers",
                url: "https://leetcode.com/problems/add-two-numbers/",
            },
            {
                label: "LeetCode 83 - Remove Duplicates from Sorted List",
                url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
            },
            {
                label: "LeetCode 82 - Remove Duplicates from Sorted List II",
                url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
            },
            {
                label: "LeetCode 430 - Flatten a Multilevel Doubly Linked List",
                url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
            },
            {
                label: "LeetCode 725 - Split Linked List in Parts",
                url: "https://leetcode.com/problems/split-linked-list-in-parts/",
            },
            {
                label: "LeetCode 143 - Reorder List",
                url: "https://leetcode.com/problems/reorder-list/",
            },
            {
                label: "LeetCode 148 - Reorder List",
                url: "https://leetcode.com/problems/reorder-list/",
            },
        ],
    },
    {
        sectionTitle: "More Arrays",
        questions: [
            {
                label: "LeetCode 238 - Product of Array Except Self",
                url: "https://leetcode.com/problems/product-of-array-except-self/",
            },
            {
                label: "LeetCode 153 - Find Minimum in Rotated Sorted Array",
                url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
            },
            {
                label: "LeetCode 33 - Search in Rotated Sorted Array",
                url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            },
            {
                label: "LeetCode 15 - 3Sum",
                url: "https://leetcode.com/problems/3sum/",
            },
            {
                label: "LeetCode 11 - Container With Most Water",
                url: "https://leetcode.com/problems/container-with-most-water/",
            },
            {
                label: "LeetCode 56 - Merge Intervals",
                url: "https://leetcode.com/problems/merge-intervals/",
            },
            {
                label: "LeetCode 57 - Insert Interval",
                url: "https://leetcode.com/problems/insert-interval/",
            },
            {
                label: "LeetCode 75 - Sort Colors",
                url: "https://leetcode.com/problems/sort-colors/",
            },
            {
                label: "LeetCode 54 - Spiral Matrix",
                url: "https://leetcode.com/problems/spiral-matrix/",
            },
            {
                label: "LeetCode 287 - Find the Duplicate Number",
                url: "https://leetcode.com/problems/find-the-duplicate-number/",
            },
            {
                label: "LeetCode 31 - Next Permutation",
                url: "https://leetcode.com/problems/next-permutation/",
            },
            {
                label: "LeetCode 26 - Remove Duplicates from Sorted Array",
                url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            },
            {
                label: "LeetCode 27 - Sort List",
                url: "https://leetcode.com/problems/sort-list/description/",
            },
        ],
    },
    {
        sectionTitle: "Sorting",
        questions: [
            {
                label: "LeetCode 57 - Insert Interval",
                url: "https://leetcode.com/problems/insert-interval/",
            },
            {
                label: "LeetCode 905 - Sort Array By Parity",
                url: "https://leetcode.com/problems/sort-array-by-parity/",
            },
            {
                label: "LeetCode 179 - Largest Number",
                url: "https://leetcode.com/problems/largest-number/",
            },
            {
                label: "LeetCode 148 - Sort List",
                url: "https://leetcode.com/problems/sort-list/",
            },
            {
                label: "LeetCode 452 - Minimum Number of Arrows to Burst Balloons",
                url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
            },
            {
                label: "LeetCode 561 - Array Partition",
                url: "https://leetcode.com/problems/array-partition/",
            },
            {
                label: "LeetCode 274 - H-Index",
                url: "https://leetcode.com/problems/h-index/",
            },
            {
                label: "LeetCode 275 - H-Index II",
                url: "https://leetcode.com/problems/h-index-ii/",
            },
            {
                label: "LeetCode 324 - Wiggle Sort II",
                url: "https://leetcode.com/problems/wiggle-sort-ii/",
            },
        ],
    },
    {
        sectionTitle: "Recursion",
        questions: [
            {
                label: "LeetCode 39 - Combination Sum",
                url: "https://leetcode.com/problems/combination-sum/",
            },
            {
                label: "LeetCode 79 - Word Search",
                url: "https://leetcode.com/problems/word-search/",
            },
            {
                label: "LeetCode 980 - Unique Paths III",
                url: "https://leetcode.com/problems/unique-paths-iii/",
            },
            {
                label: "LeetCode 51 - N-Queens",
                url: "https://leetcode.com/problems/n-queens/",
            },
            {
                label: "LeetCode 779 - K-th Symbol in Grammar",
                url: "https://leetcode.com/problems/k-th-symbol-in-grammar/",
            },
        ],
    },
    {
        sectionTitle: "OOPS",
        questions: [
            {
                label: "LeetCode 1603 - Design Parking System",
                url: "https://leetcode.com/problems/design-parking-system/",
            },
            {
                label: "LeetCode 211 - Design Add and Search Words Data Structure",
                url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
            },
        ],
    },
    {
        sectionTitle: "Linked List",
        questions: [
            {
                label: "LeetCode 203 - Remove Linked List Elements",
                url: "https://leetcode.com/problems/remove-linked-list-elements/",
            },
            {
                label: "LeetCode 237 - Delete Node in a Linked List",
                url: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
            },
            {
                label: "LeetCode 2 - Add Two Numbers",
                url: "https://leetcode.com/problems/add-two-numbers/",
            },
            {
                label: "LeetCode 61 - Rotate List",
                url: "https://leetcode.com/problems/rotate-list/",
            },
            {
                label: "LeetCode 148 - Sort List",
                url: "https://leetcode.com/problems/sort-list/",
            },
            {
                label: "LeetCode 430 - Flatten a Multilevel Doubly Linked List",
                url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
            },
            {
                label: "LeetCode 1721 - Swapping Nodes in a Linked List",
                url: "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/",
            },
            {
                label: "LeetCode 86 - Partition List",
                url: "https://leetcode.com/problems/partition-list/",
            },
            {
                label: "LeetCode 25 - Reverse Nodes in k-Group",
                url: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
            },
            {
                label: "LeetCode 707 - Design Linked List",
                url: "https://leetcode.com/problems/design-linked-list/",
            },
            {
                label: "LeetCode 430 - Flatten a Multilevel Doubly Linked List",
                url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
            },
            {
                label: "LeetCode 1669 - Merge In Between Linked Lists",
                url: "https://leetcode.com/problems/merge-in-between-linked-lists/",
            },
            {
                label: "LeetCode 147 - Insertion Sort List",
                url: "https://leetcode.com/problems/insertion-sort-list/",
            },
            {
                label: "LeetCode 2363 - Merge Similar Items",
                url: "https://leetcode.com/problems/merge-similar-items/",
            },
            {
                label: "LeetCode 2516 - Take K of Each Character From Left and Right",
                url: "https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/",
            },
            {
                label: "LeetCode 2095 - Delete the Middle Node of a Linked List",
                url: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/",
            },
            {
                label: "LeetCode 876 - Middle of the Linked List",
                url: "https://leetcode.com/problems/middle-of-the-linked-list/",
            },
            {
                label: "LeetCode 1171 - Remove Zero Sum Consecutive Nodes from Linked List",
                url: "https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/",
            },
            {
                label: "LeetCode 2807 - Insert Greatest Common Divisors in Linked List",
                url: "https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/",
            },
        ],
    },
];
const mlectures = [];

// Add remaining lectures to the main lectures array
lectures.push(
    // Lecture 60
    {
        title: "Lecture 60",
        url: "https://www.youtube.com/watch?v=W7uB9-TKfTg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=65",
        videoEmbed: "https://www.youtube.com/embed/W7uB9-TKfTg",
        topics: [],
        questions: [
            {
                label: "LeetCode 232 - Implement Queue using Stacks",
                url: "https://leetcode.com/problems/implement-queue-using-stacks/",
            },
            {
                label: "LeetCode 622 - Design Circular Queue",
                url: "https://leetcode.com/problems/design-circular-queue/",
            },
            {
                label: "LeetCode 1670 - Design Front Middle Back Queue",
                url: "https://leetcode.com/problems/design-front-middle-back-queue/",
            },
            {
                label: "LeetCode 933 - Number of Recent Calls",
                url: "https://leetcode.com/problems/number-of-recent-calls/",
            },
            {
                label: "LeetCode 279 - Perfect Squares",
                url: "https://leetcode.com/problems/perfect-squares/",
            },
        ],
    },
    // Lecture 61
    {
        title: "Lecture 61",
        url: "https://www.youtube.com/watch?v=_gJ3to4RyeQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=66",
        videoEmbed: "https://www.youtube.com/embed/_gJ3to4RyeQ",
        topics: [],
        questions: [
            {
                label: "LeetCode 994 - Rotting Oranges",
                url: "https://leetcode.com/problems/rotting-oranges/",
            },
            {
                label: "LeetCode 1091 - Shortest Path in Binary Matrix",
                url: "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
            },
            {
                label: "LeetCode 1306 - Jump Game III",
                url: "https://leetcode.com/problems/jump-game-iii/",
            },
            {
                label: "LeetCode 1376 - Time Needed to Inform All Employees",
                url: "https://leetcode.com/problems/time-needed-to-inform-all-employees/",
            },
            {
                label: "LeetCode 934 - Shortest Bridge",
                url: "https://leetcode.com/problems/shortest-bridge/",
            },
        ],
    },
    // Lecture 62
    {
        title: "Lecture 62",
        url: "https://www.youtube.com/watch?v=5NiXlPrLslg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=67",
        videoEmbed: "https://www.youtube.com/embed/5NiXlPrLslg",
        topics: [],
        questions: [
            {
                label: "LeetCode 94 - Binary Tree Inorder Traversal",
                url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
            },
            {
                label: "LeetCode 144 - Binary Tree Preorder Traversal",
                url: "https://leetcode.com/problems/binary-tree-preorder-traversal/",
            },
            {
                label: "LeetCode 145 - Binary Tree Postorder Traversal",
                url: "https://leetcode.com/problems/binary-tree-postorder-traversal/",
            },
        ],
    },
    // Lecture 63
    {
        title: "Lecture 63",
        url: "https://www.youtube.com/watch?v=nHMQ33LZ6oA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=69",
        videoEmbed: "https://www.youtube.com/embed/nHMQ33LZ6oA",
        topics: [],
        questions: [
            {
                label: "LeetCode 102 - Binary Tree Level Order Traversal",
                url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            },
            {
                label: "LeetCode 103 - Binary Tree Zigzag Level Order Traversal",
                url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
            },
            {
                label: "LeetCode 104 - Maximum Depth of Binary Tree",
                url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            },
        ],
    },
    // Lecture 64
    {
        title: "Lecture 64",
        url: "https://www.youtube.com/watch?v=s1d8UGDCCN8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=70",
        videoEmbed: "https://www.youtube.com/embed/s1d8UGDCCN8",
        topics: [],
        questions: [
            {
                label: "LeetCode 101 - Symmetric Tree",
                url: "https://leetcode.com/problems/symmetric-tree/",
            },
            {
                label: "LeetCode 112 - Path Sum",
                url: "https://leetcode.com/problems/path-sum/",
            },
            {
                label: "LeetCode 113 - Path Sum II",
                url: "https://leetcode.com/problems/path-sum-ii/",
            },
        ],
    },
    // Lecture 65
    {
        title: "Lecture 65",
        url: "https://www.youtube.com/watch?v=QG0hE0R_ng4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=71",
        videoEmbed: "https://www.youtube.com/embed/QG0hE0R_ng4",
        topics: [],
        questions: [
            {
                label: "LeetCode 437 - Path Sum III",
                url: "https://leetcode.com/problems/path-sum-iii/",
            },
            {
                label: "LeetCode 108 - Convert Sorted Array to Binary Search Tree",
                url: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
            },
            {
                label: "LeetCode 109 - Convert Sorted List to Binary Search Tree",
                url: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
            },
        ],
    },
    // Lecture 66
    {
        title: "Lecture 66",
        url: "https://www.youtube.com/watch?v=ffE1xj51EBQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=72",
        videoEmbed: "https://www.youtube.com/embed/ffE1xj51EBQ",
        topics: [],
        questions: [
            {
                label: "LeetCode 110 - Balanced Binary Tree",
                url: "https://leetcode.com/problems/balanced-binary-tree/",
            },
            {
                label: "LeetCode 111 - Minimum Depth of Binary Tree",
                url: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
            },
            {
                label: "LeetCode 124 - Binary Tree Maximum Path Sum",
                url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
            },
        ],
    },
    // Lecture 67
    {
        title: "Lecture 67",
        url: "https://www.youtube.com/watch?v=XLdpy0_6MR4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=73",
        videoEmbed: "https://www.youtube.com/embed/XLdpy0_6MR4",
        topics: [],
        questions: [
            {
                label: "LeetCode 100 - Same Tree",
                url: "https://leetcode.com/problems/same-tree/",
            },
            {
                label: "LeetCode 572 - Subtree of Another Tree",
                url: "https://leetcode.com/problems/subtree-of-another-tree/",
            },
            {
                label: "LeetCode 105 - Construct Binary Tree from Preorder and Inorder Traversal",
                url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
            },
            {
                label: "LeetCode 106 - Construct Binary Tree from Inorder and Postorder Traversal",
                url: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
            },
            {
                label: "LeetCode 199 - Binary Tree Right Side View",
                url: "https://leetcode.com/problems/binary-tree-right-side-view/",
            },
        ],
    },
    // Lecture 68
    {
        title: "Lecture 68",
        url: "https://www.youtube.com/watch?v=2BdY9fixMrM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=74",
        videoEmbed: "https://www.youtube.com/embed/2BdY9fixMrM",
        topics: [],
        questions: [
            {
                label: "LeetCode 129 - Sum Root to Leaf Numbers",
                url: "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
            },
            {
                label: "LeetCode 236 - Lowest Common Ancestor of a Binary Tree",
                url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
            },
            {
                label: "LeetCode 235 - Lowest Common Ancestor of a Binary Search Tree",
                url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
            },
        ],
    },
    // Lecture 69
    {
        title: "Lecture 69",
        url: "https://www.youtube.com/watch?v=UeRUKRJvPa4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=75",
        videoEmbed: "https://www.youtube.com/embed/UeRUKRJvPa4",
        topics: [],
        questions: [
            {
                label: "LeetCode 114 - Flatten Binary Tree to Linked List",
                url: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
            },
            {
                label: "LeetCode 116 - Populating Next Right Pointers in Each Node",
                url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
            },
            {
                label: "LeetCode 117 - Populating Next Right Pointers in Each Node II",
                url: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/",
            },
        ],
    },
    // Lecture 70
    {
        title: "Lecture 70",
        url: "https://www.youtube.com/watch?v=pDURIj98e0I&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=76",
        videoEmbed: "https://www.youtube.com/embed/pDURIj98e0I",
        topics: [],
        questions: [
            {
                label: "LeetCode 968 - Binary Tree Cameras",
                url: "https://leetcode.com/problems/binary-tree-cameras/",
            },
            {
                label: "LeetCode 563 - Binary Tree Tilt",
                url: "https://leetcode.com/problems/binary-tree-tilt/",
            },
            {
                label: "LeetCode 404 - Sum of Left Leaves",
                url: "https://leetcode.com/problems/sum-of-left-leaves/",
            },
        ],
    },
    // Lecture 71
    {
        title: "Lecture 71",
        url: "https://www.youtube.com/watch?v=IGHyX15fLI8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=77",
        videoEmbed: "https://www.youtube.com/embed/IGHyX15fLI8",
        topics: [],
        questions: [
            {
                label: "LeetCode 257 - Binary Tree Paths",
                url: "https://leetcode.com/problems/binary-tree-paths/",
            },
            {
                label: "LeetCode 543 - Diameter of Binary Tree",
                url: "https://leetcode.com/problems/diameter-of-binary-tree/",
            },
            {
                label: "LeetCode 297 - Serialize and Deserialize Binary Tree",
                url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
            },
        ],
    },
    // Lecture 72
    {
        title: "Lecture 72",
        url: "https://www.youtube.com/watch?v=18w8VduomfI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=78",
        videoEmbed: "https://www.youtube.com/embed/18w8VduomfI",
        topics: [],
        questions: [
            {
                label: "LeetCode 226 - Invert Binary Tree",
                url: "https://leetcode.com/problems/invert-binary-tree/",
            },
            {
                label: "LeetCode 366 - Find Leaves of Binary Tree",
                url: "https://leetcode.com/problems/find-leaves-of-binary-tree/",
            },
            {
                label: "LeetCode 222 - Count Complete Tree Nodes",
                url: "https://leetcode.com/problems/count-complete-tree-nodes/",
            },
        ],
    },
    // Lecture 73
    {
        title: "Lecture 73",
        url: "https://www.youtube.com/watch?v=fqx8z3VepMA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=79",
        videoEmbed: "https://www.youtube.com/embed/fqx8z3VepMA",
        topics: [],
        questions: [
            {
                label: "LeetCode 230 - Kth Smallest Element in a BST",
                url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            },
            {
                label: "LeetCode 98 - Validate Binary Search Tree",
                url: "https://leetcode.com/problems/validate-binary-search-tree/",
            },
            {
                label: "LeetCode 99 - Recover Binary Search Tree",
                url: "https://leetcode.com/problems/recover-binary-search-tree/",
            },
        ],
    },
    // Lecture 74
    {
        title: "Lecture 74",
        url: "https://www.youtube.com/watch?v=NKJnHewiGdc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=80",
        videoEmbed: "https://www.youtube.com/embed/NKJnHewiGdc",
        topics: [],
        questions: [
            {
                label: "LeetCode 173 - Binary Search Tree Iterator",
                url: "https://leetcode.com/problems/binary-search-tree-iterator/",
            },
            {
                label: "LeetCode 450 - Delete Node in a BST",
                url: "https://leetcode.com/problems/delete-node-in-a-bst/",
            },
        ],
    },
    // Lecture 75
    {
        title: "Lecture 75",
        url: "https://www.youtube.com/watch?v=_9F2VgZcvdw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=81",
        videoEmbed: "https://www.youtube.com/embed/_9F2VgZcvdw",
        topics: [],
        questions: [],
    },
    // Lecture 76
    {
        title: "Lecture 76",
        url: "https://www.youtube.com/watch?v=eccAKrmffh8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=83",
        videoEmbed: "https://www.youtube.com/embed/eccAKrmffh8",
        topics: [],
        questions: [],
    },
    // Lecture 77
    {
        title: "Lecture 77",
        url: "https://www.youtube.com/watch?v=RrxpTWqj97A&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=84",
        videoEmbed: "https://www.youtube.com/embed/RrxpTWqj97A",
        topics: [],
        questions: [],
    },
    // Lecture 78
    {
        title: "Lecture 78",
        url: "https://www.youtube.com/watch?v=7mUKGHznpfg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=85",
        videoEmbed: "https://www.youtube.com/embed/7mUKGHznpfg",
        topics: [],
        questions: [
            {
                label: "LeetCode 215 - Kth Largest Element in an Array",
                url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
            },
            {
                label: "LeetCode 347 - Top K Frequent Elements",
                url: "https://leetcode.com/problems/top-k-frequent-elements/",
            },
            {
                label: "LeetCode 23 - Merge k Sorted Lists",
                url: "https://leetcode.com/problems/merge-k-sorted-lists/",
            },
            {
                label: "LeetCode 295 - Find Median from Data Stream",
                url: "https://leetcode.com/problems/find-median-from-data-stream/",
            },
            {
                label: "LeetCode 239 - Sliding Window Maximum",
                url: "https://leetcode.com/problems/sliding-window-maximum/",
            },
            {
                label: "LeetCode 378 - Kth Smallest Element in a Sorted Matrix",
                url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
            },
            {
                label: "LeetCode 621 - Task Scheduler",
                url: "https://leetcode.com/problems/task-scheduler/",
            },
            {
                label: "LeetCode 56 - Merge Intervals",
                url: "https://leetcode.com/problems/merge-intervals/",
            },
            {
                label: "LeetCode 1167 - Minimum Cost to Connect Sticks",
                url: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
            },
            {
                label: "LeetCode 973 - K Closest Points to Origin",
                url: "https://leetcode.com/problems/k-closest-points-to-origin/",
            },
            {
                label: "LeetCode 451 - Sort Characters By Frequency",
                url: "https://leetcode.com/problems/sort-characters-by-frequency/",
            },
            {
                label: "LeetCode 857 - Minimum Cost to Hire K Workers",
                url: "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/",
            },
            {
                label: "LeetCode 373 - Find K Pairs with Smallest Sums",
                url: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
            },
            {
                label: "LeetCode 407 - Trapping Rain Water II",
                url: "https://leetcode.com/problems/trapping-rain-water-ii/",
            },
            {
                label: "LeetCode 1642 - Furthest Building You Can Reach",
                url: "https://leetcode.com/problems/furthest-building-you-can-reach/",
            },
            {
                label: "LeetCode 502 - IPO",
                url: "https://leetcode.com/problems/ipo/",
            },
            {
                label: "LeetCode 1686 - Stone Game VI",
                url: "https://leetcode.com/problems/stone-game-vi/",
            },
            {
                label: "LeetCode 871 - Minimum Number of Refueling Stops",
                url: "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
            },
            {
                label: "LeetCode 1046 - Last Stone Weight",
                url: "https://leetcode.com/problems/last-stone-weight/",
            },
            {
                label: "LeetCode 452 - Minimum Number of Arrows to Burst Balloons",
                url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
            },
            {
                label: "LeetCode 1792 - Maximum Average Pass Ratio",
                url: "https://leetcode.com/problems/maximum-average-pass-ratio/",
            },
            {
                label: "LeetCode 630 - Course Schedule III",
                url: "https://leetcode.com/problems/course-schedule-iii/",
            },
            {
                label: "LeetCode 1383 - Maximum Performance of a Team",
                url: "https://leetcode.com/problems/maximum-performance-of-a-team/",
            },
        ],
    },
    // Lecture 79
    {
        title: "Lecture 79",
        url: "https://www.youtube.com/watch?v=Y6dOuGjwsxU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=87",
        videoEmbed: "https://www.youtube.com/embed/Y6dOuGjwsxU",
        topics: ["Trie & its Implementation"],
        questions: [
            {
                label: "LeetCode 208 - Implement Trie (Prefix Tree)",
                url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
            },
            {
                label: "LeetCode 211 - Add and Search Word - Data Structure Design",
                url: "https://leetcode.com/problems/add-and-search-word-data-structure-design/",
            },
            {
                label: "LeetCode 212 - Word Search II",
                url: "https://leetcode.com/problems/word-search-ii/",
            },
        ],
    },
    // Lecture 80
    {
        title: "Lecture 80",
        url: "https://www.youtube.com/watch?v=VTr3Nh7BadI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=88",
        videoEmbed: "https://www.youtube.com/embed/VTr3Nh7BadI",
        topics: ["Implement a Phone Directory Using Trie"],
        questions: [
            {
                label: "LeetCode 14 - Longest Common Prefix",
                url: "https://leetcode.com/problems/longest-common-prefix/",
            },
        ],
    },
    // Lecture 81
    {
        title: "Lecture 81",
        url: "https://www.youtube.com/watch?v=SK2S5lQegVg&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=89",
        videoEmbed: "https://www.youtube.com/embed/SK2S5lQegVg",
        topics: ["Longest Common Prefix Problem"],
        questions: [
            {
                label: "LeetCode 379 - Design Phone Directory",
                url: "https://leetcode.com/problems/design-phone-directory/",
            },
        ],
    },
    // Lecture 82
    {
        title: "Lecture 82",
        url: "https://www.youtube.com/watch?v=wjqSZy4pMT4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=90",
        videoEmbed: "https://www.youtube.com/embed/wjqSZy4pMT4",
        topics: ["Rat in Maze Problem"],
        questions: [
            {
                label: "LeetCode 79 - Word Search",
                url: "https://leetcode.com/problems/word-search/",
            },
            {
                label: "LeetCode 17 - Letter Combinations of a Phone Number",
                url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
            },
        ],
    },
    // Lecture 83
    {
        title: "Lecture 83",
        url: "https://www.youtube.com/watch?v=9wEwqNdOAVQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=91",
        videoEmbed: "https://www.youtube.com/embed/9wEwqNdOAVQ",
        topics: ["N-Queen Problem"],
        questions: [
            {
                label: "LeetCode 51 - N-Queens",
                url: "https://leetcode.com/problems/n-queens/",
            },
            {
                label: "LeetCode 52 - N-Queens II",
                url: "https://leetcode.com/problems/n-queens-ii/",
            },
        ],
    },
    // Lecture 84
    {
        title: "Lecture 84",
        url: "https://www.youtube.com/watch?v=8lWxaRviJBA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=92",
        videoEmbed: "https://www.youtube.com/embed/8lWxaRviJBA",
        topics: ["Sudoku Solver Problem"],
        questions: [
            {
                label: "LeetCode 37 - Sudoku Solver",
                url: "https://leetcode.com/problems/sudoku-solver/",
            },
            {
                label: "LeetCode 36 - Valid Sudoku",
                url: "https://leetcode.com/problems/valid-sudoku/",
            },
        ],
    },
    // Lecture 85
    {
        title: "Lecture 85",
        url: "https://www.youtube.com/watch?v=EaK6aslcC5g&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=93",
        videoEmbed: "https://www.youtube.com/embed/EaK6aslcC5g",
        topics: [],
        questions: [],
    },
    // Lecture 86
    {
        title: "Lecture 86",
        url: "https://www.youtube.com/watch?v=b5kij1Akf9I&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=94",
        videoEmbed: "https://www.youtube.com/embed/b5kij1Akf9I",
        topics: [],
        questions: [],
    },
    // Lecture 87
    {
        title: "Lecture 87",
        url: "https://www.youtube.com/watch?v=aJa3U-hydXc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=95",
        videoEmbed: "https://www.youtube.com/embed/aJa3U-hydXc",
        topics: [],
        questions: [],
    },
    // Lecture 88
    {
        title: "Lecture 88",
        url: "https://www.youtube.com/watch?v=1cSzxlhxOw8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=96",
        videoEmbed: "https://www.youtube.com/embed/1cSzxlhxOw8",
        topics: [],
        questions: [],
    },
    // Lecture 89
    {
        title: "Lecture 89",
        url: "https://www.youtube.com/watch?v=Tl5qbEmEQyY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=97",
        videoEmbed: "https://www.youtube.com/embed/Tl5qbEmEQyY",
        topics: [],
        questions: [],
    },
    // Lecture 90
    {
        title: "Lecture 90",
        url: "https://www.youtube.com/watch?v=T_boOrr0rvk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=98",
        videoEmbed: "https://www.youtube.com/embed/T_boOrr0rvk",
        topics: [],
        questions: [],
    },
    // Lecture 91
    {
        title: "Lecture 91",
        url: "https://www.youtube.com/watch?v=6XmzL04mlgQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=99",
        videoEmbed: "https://www.youtube.com/embed/6XmzL04mlgQ",
        topics: [],
        questions: [],
    },
    // Lecture 92
    {
        title: "Lecture 92",
        url: "https://www.youtube.com/watch?v=X2_tYUuthH8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=101",
        videoEmbed: "https://www.youtube.com/embed/X2_tYUuthH8",
        topics: [],
        questions: [],
    },
    // Lecture 93
    {
        title: "Lecture 93",
        url: "https://www.youtube.com/watch?v=abIEXKFpLNE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=102",
        videoEmbed: "https://www.youtube.com/embed/abIEXKFpLNE",
        topics: [],
        questions: [],
    },
    // Lecture 94
    {
        title: "Lecture 94",
        url: "https://www.youtube.com/watch?v=P_bfy0LOU5g&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=103",
        videoEmbed: "https://www.youtube.com/embed/P_bfy0LOU5g",
        topics: [],
        questions: [
            // Graph Lectures Questions
            {
                label: "LeetCode 200 - Number of Islands",
                url: "https://leetcode.com/problems/number-of-islands/",
            },
            {
                label: "LeetCode 261 - Graph Valid Tree",
                url: "https://leetcode.com/problems/graph-valid-tree/",
            },
            {
                label: "LeetCode 207 - Course Schedule",
                url: "https://leetcode.com/problems/course-schedule/",
            },
            {
                label: "LeetCode 210 - Course Schedule II",
                url: "https://leetcode.com/problems/course-schedule-ii/",
            },
            {
                label: "LeetCode 269 - Alien Dictionary",
                url: "https://leetcode.com/problems/alien-dictionary/",
            },
            {
                label: "LeetCode 127 - Word Ladder",
                url: "https://leetcode.com/problems/word-ladder/",
            },
            {
                label: "LeetCode 126 - Word Ladder II",
                url: "https://leetcode.com/problems/word-ladder-ii/",
            },
            {
                label: "LeetCode 133 - Clone Graph",
                url: "https://leetcode.com/problems/clone-graph/",
            },
            {
                label: "LeetCode 417 - Pacific Atlantic Water Flow",
                url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
            },
            {
                label: "LeetCode 743 - Network Delay Time",
                url: "https://leetcode.com/problems/network-delay-time/",
            },
            {
                label: "LeetCode 684 - Redundant Connection",
                url: "https://leetcode.com/problems/redundant-connection/",
            },
            {
                label: "LeetCode 685 - Redundant Connection II",
                url: "https://leetcode.com/problems/redundant-connection-ii/",
            },
            {
                label: "LeetCode 1192 - Critical Connections in a Network",
                url: "https://leetcode.com/problems/critical-connections-in-a-network/",
            },
            {
                label: "LeetCode 399 - Evaluate Division",
                url: "https://leetcode.com/problems/evaluate-division/",
            },
            {
                label: "LeetCode 787 - Cheapest Flights Within K Stops",
                url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
            },
            {
                label: "LeetCode 785 - Is Graph Bipartite?",
                url: "https://leetcode.com/problems/is-graph-bipartite/",
            },
            {
                label: "LeetCode 721 - Accounts Merge",
                url: "https://leetcode.com/problems/accounts-merge/",
            },
            {
                label: "LeetCode 1631 - Path With Minimum Effort",
                url: "https://leetcode.com/problems/path-with-minimum-effort/",
            },
            {
                label: "LeetCode 797 - All Paths From Source to Target",
                url: "https://leetcode.com/problems/all-paths-from-source-to-target/",
            },
            {
                label: "LeetCode 997 - Find the Town Judge",
                url: "https://leetcode.com/problems/find-the-town-judge/",
            },
            {
                label: "LeetCode 1584 - Min Cost to Connect All Points",
                url: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
            },
            {
                label: "LeetCode 332 - Reconstruct Itinerary",
                url: "https://leetcode.com/problems/reconstruct-itinerary/",
            },
            {
                label: "LeetCode 444 - Sequence Reconstruction",
                url: "https://leetcode.com/problems/sequence-reconstruction/",
            },
            {
                label: "LeetCode 630 - Course Schedule III",
                url: "https://leetcode.com/problems/course-schedule-iii/",
            },
            {
                label: "LeetCode 490 - The Maze",
                url: "https://leetcode.com/problems/the-maze/",
            },
            {
                label: "LeetCode 505 - The Maze II",
                url: "https://leetcode.com/problems/the-maze-ii/",
            },
            {
                label: "LeetCode 499 - The Maze III",
                url: "https://leetcode.com/problems/the-maze-iii/",
            },
            {
                label: "LeetCode 329 - Longest Increasing Path in a Matrix",
                url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
            },
            {
                label: "LeetCode 433 - Minimum Genetic Mutation",
                url: "https://leetcode.com/problems/minimum-genetic-mutation/",
            },
            {
                label: "LeetCode 778 - Swim in Rising Water",
                url: "https://leetcode.com/problems/swim-in-rising-water/",
            },
            {
                label: "LeetCode 864 - Shortest Path to Get All Keys",
                url: "https://leetcode.com/problems/shortest-path-to-get-all-keys/",
            },
            {
                label: "LeetCode 815 - Bus Routes",
                url: "https://leetcode.com/problems/bus-routes/",
            },
            {
                label: "LeetCode 1306 - Jump Game III",
                url: "https://leetcode.com/problems/jump-game-iii/",
            },
            {
                label: "LeetCode 802 - Find Eventual Safe States",
                url: "https://leetcode.com/problems/find-eventual-safe-states/",
            },
            {
                label: "LeetCode 1462 - Course Schedule IV",
                url: "https://leetcode.com/problems/course-schedule-iv/",
            },
            {
                label: "LeetCode 1 - 2-SAT Problem",
                url: "https://leetcode.com/problems/two-sum/",
            },
            {
                label: "LeetCode 785 - Maximum Bipartite Matching",
                url: "https://leetcode.com/problems/is-graph-bipartite/",
            },
            {
                label: "LeetCode 785 - Bipartite Graph Check",
                url: "https://leetcode.com/problems/is-graph-bipartite/",
            },
            {
                label: "LeetCode 200 - Breadth-First Search",
                url: "https://leetcode.com/problems/number-of-islands/",
            },
            {
                label: "LeetCode 200 - Depth-First Search",
                url: "https://leetcode.com/problems/number-of-islands/",
            },
            {
                label: "LeetCode 864 - A* Algorithm",
                url: "https://leetcode.com/problems/shortest-path-to-get-all-keys/",
            },
            {
                label: "LeetCode 1510 - Minimax Algorithm",
                url: "https://leetcode.com/problems/stone-game-v/",
            },
            {
                label: "LeetCode 1615 - Hungarian Algorithm",
                url: "https://leetcode.com/problems/maximal-network-rank/",
            },
            {
                label: "LeetCode 1615 - Dinic's Algorithm",
                url: "https://leetcode.com/problems/maximal-network-rank/",
            },
            {
                label: "LeetCode 1615 - Edmonds-Karp Algorithm",
                url: "https://leetcode.com/problems/maximal-network-rank/",
            },
            {
                label: "LeetCode 200 - Graph Traversal",
                url: "https://leetcode.com/problems/number-of-islands/",
            },
            {
                label: "LeetCode 1293 - Shortest Path in a Grid with Obstacles Elimination",
                url: "https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/",
            },
            {
                label: "LeetCode 1219 - Path with Maximum Gold",
                url: "https://leetcode.com/problems/path-with-maximum-gold/",
            },
            {
                label: "LeetCode 1202 - Smallest String With Swaps",
                url: "https://leetcode.com/problems/smallest-string-with-swaps/",
            },
            {
                label: "LeetCode 310 - Minimum Height Trees",
                url: "https://leetcode.com/problems/minimum-height-trees/",
            },
            {
                label: "LeetCode 1136 - Parallel Courses",
                url: "https://leetcode.com/problems/parallel-courses/",
            },
            {
                label: "LeetCode 1443 - Minimum Time to Collect All Apples in a Tree",
                url: "https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/",
            },
            {
                label: "LeetCode 185 - Longest Subarray With Maximum Bitwise AND",
                url: "https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/",
            },
        ],
    }
);

// Initialize the lectures array if not already initialized
const klectures = [
    // ... (Previous lectures 60 to 94)
];

// Add remaining lectures to the main lectures array
lectures.push(
    // Lecture 95
    {
        title: "Lecture 95",
        url: "https://www.youtube.com/watch?v=dVUR3Rm6biE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=104",
        videoEmbed: "https://www.youtube.com/embed/dVUR3Rm6biE",
        topics: [],
        questions: [
            {
                label: "Network Delay Time",
                url: "https://leetcode.com/problems/network-delay-time/",
            },
            {
                label: "Cheapest Flights Within K Stops",
                url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
            },
            {
                label: "Path with Minimum Effort",
                url: "https://leetcode.com/problems/path-with-minimum-effort/",
            },
            {
                label: "Swim in Rising Water",
                url: "https://leetcode.com/problems/swim-in-rising-water/",
            },
            {
                label: "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
                url: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
            },
            {
                label: "Reachable Nodes In Subdivided Graph",
                url: "https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/",
            },
            {
                label: "The Maze II",
                url: "https://leetcode.com/problems/the-maze-ii/",
            },
        ],
    },
    // Lecture 96
    {
        title: "Lecture 96",
        url: "https://www.youtube.com/watch?v=rnYBi9N_vw4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=105",
        videoEmbed: "https://www.youtube.com/embed/rnYBi9N_vw4",
        topics: ["Kahn's Algorithm"],
        questions: [
            {
                label: "Course Schedule",
                url: "https://leetcode.com/problems/course-schedule/",
            },
            {
                label: "Course Schedule II",
                url: "https://leetcode.com/problems/course-schedule-ii/",
            },
            {
                label: "Alien Dictionary",
                url: "https://leetcode.com/problems/alien-dictionary/",
            },
            {
                label: "Parallel Courses",
                url: "https://leetcode.com/problems/parallel-courses/",
            },
            {
                label: "Sequence Reconstruction",
                url: "https://leetcode.com/problems/sequence-reconstruction/",
            },
            {
                label: "Minimum Height Trees",
                url: "https://leetcode.com/problems/minimum-height-trees/",
            },
        ],
    },
    // Lecture 97
    {
        title: "Lecture 97",
        url: "https://www.youtube.com/watch?v=KxLtIrCyXwE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=106",
        videoEmbed: "https://www.youtube.com/embed/KxLtIrCyXwE",
        topics: [],
        questions: [
            {
                label: "All Ancestors of a Node in a Directed Acyclic Graph",
                url: "https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/",
            },
            {
                label: "Maximum Product of Splitted Binary Tree",
                url: "https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/",
            },
            {
                label: "Possible Bipartition",
                url: "https://leetcode.com/problems/possible-bipartition/",
            },
            {
                label: "Employee Importance",
                url: "https://leetcode.com/problems/employee-importance/",
            },
            {
                label: "Longest Cycle in a Graph",
                url: "https://leetcode.com/problems/longest-cycle-in-a-graph/",
            },
            {
                label: "Course Schedule III",
                url: "https://leetcode.com/problems/course-schedule-iii/",
            },
            {
                label: "Minimum Jumps to Reach Home",
                url: "https://leetcode.com/problems/minimum-jumps-to-reach-home/",
            },
            {
                label: "Minimum Cost to Make at Least One Valid Path in a Grid",
                url: "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/",
            },
            {
                label: "Path with Maximum Probability",
                url: "https://leetcode.com/problems/path-with-maximum-probability/",
            },
            {
                label: "Make the Path Plain in a Grid",
                url: "https://leetcode.com/problems/make-the-path-plain-in-a-grid/",
            },
            {
                label: "Find the Kth Smallest Sum of a Matrix with Sorted Rows",
                url: "https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/",
            },
            {
                label: "Number of Operations to Make Network Connected",
                url: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/",
            },
            {
                label: "Kth Ancestor of a Tree Node",
                url: "https://leetcode.com/problems/kth-ancestor-of-a-tree-node/",
            },
            {
                label: "Longest Increasing Path in a Matrix",
                url: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
            },
            {
                label: "Find the Closest Node to Given Two Nodes",
                url: "https://leetcode.com/problems/find-the-closest-node-to-given-two-nodes/",
            },
            {
                label: "Longest Path with Different Adjacent Characters",
                url: "https://leetcode.com/problems/longest-path-with-different-adjacent-characters/",
            },
            {
                label: "Maximum Weight of Matrix",
                url: "https://leetcode.com/problems/maximum-weight-of-matrix/",
            },
            {
                label: "The Time When the Network Becomes Idle",
                url: "https://leetcode.com/problems/the-time-when-the-network-becomes-idle/",
            },
            {
                label: "Find if Path Exists in Graph",
                url: "https://leetcode.com/problems/find-if-path-exists-in-graph/",
            },
            {
                label: "Critical Connections in a Network",
                url: "https://leetcode.com/problems/critical-connections-in-a-network/",
            },
            {
                label: "Connected Components in Graph",
                url: "https://leetcode.com/problems/flower-planting-with-no-adjacent/",
            },
            {
                label: "Graph Coloring Problem",
                url: "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/",
            },
            {
                label: "Graph Traversal",
                url: "https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/",
            },
            {
                label: "Find the Safest Path in Graph",
                url: "https://leetcode.com/problems/minimum-operations-to-convert-number/",
            },
            {
                label: "Find All Possible Paths in a Graph",
                url: "https://leetcode.com/problems/divisor-game/",
            },
            {
                label: "Maximum Network Rank",
                url: "https://leetcode.com/problems/maximal-network-rank/",
            },
        ],
    },
    // Lecture 98
    {
        title: "Lecture 98",
        url: "https://www.youtube.com/watch?v=CiDPT1xMKI0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=107",
        videoEmbed: "https://www.youtube.com/embed/CiDPT1xMKI0",
        topics: [],
        questions: [
            {
                label: "Longest Increasing Subsequence",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Number of Longest Increasing Subsequence",
                url: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
            },
            {
                label: "Longest Bitonic Subsequence",
                url: "https://leetcode.com/problems/longest-bitonic-subsequence/",
            },
            {
                label: "Longest Subsequence With Limited Sum",
                url: "https://leetcode.com/problems/longest-subsequence-with-limited-sum/",
            },
            {
                label: "Increasing Subsequences",
                url: "https://leetcode.com/problems/increasing-subsequences/",
            },
            {
                label: "Longest Arithmetic Subsequence",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
            },
            {
                label: "Maximum Length of Pair Chain",
                url: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
            },
            {
                label: "Wiggle Subsequence",
                url: "https://leetcode.com/problems/wiggle-subsequence/",
            },
            {
                label: "Longest Continuous Increasing Subsequence",
                url: "https://leetcode.com/problems/longest-continuous-increasing-subsequence/",
            },
        ],
    },
    // Lecture 99
    {
        title: "Lecture 99",
        url: "https://www.youtube.com/watch?v=fqkqx6OBRDE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=108",
        videoEmbed: "https://www.youtube.com/embed/fqkqx6OBRDE",
        topics: [],
        questions: [
            {
                label: "N-Queens",
                url: "https://leetcode.com/problems/n-queens/",
            },
            {
                label: "N-Queens II",
                url: "https://leetcode.com/problems/n-queens-ii/",
            },
        ],
    },
    // Lecture 100
    {
        title: "Lecture 100",
        url: "https://www.youtube.com/watch?v=5eFh5CC-8KY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=118",
        videoEmbed: "https://www.youtube.com/embed/5eFh5CC-8KY",
        topics: [],
        questions: [
            {
                label: "Longest Increasing Subsequence",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Number of Longest Increasing Subsequence",
                url: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
            },
            {
                label: "Longest Bitonic Subsequence",
                url: "https://leetcode.com/problems/longest-bitonic-subsequence/",
            },
            {
                label: "Longest Subsequence With Limited Sum",
                url: "https://leetcode.com/problems/longest-subsequence-with-limited-sum/",
            },
            {
                label: "Increasing Subsequences",
                url: "https://leetcode.com/problems/increasing-subsequences/",
            },
            {
                label: "Longest Arithmetic Subsequence",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
            },
            {
                label: "Maximum Length of Pair Chain",
                url: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
            },
            {
                label: "Wiggle Subsequence",
                url: "https://leetcode.com/problems/wiggle-subsequence/",
            },
            {
                label: "Longest Continuous Increasing Subsequence",
                url: "https://leetcode.com/problems/longest-continuous-increasing-subsequence/",
            },
        ],
    },
    // Lecture 101
    {
        title: "Lecture 101",
        url: "https://www.youtube.com/watch?v=ijpVpsmpJtQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=110",
        videoEmbed: "https://www.youtube.com/embed/ijpVpsmpJtQ",
        topics: [],
        questions: [
            {
                label: "Longest Common Subsequence",
                url: "https://leetcode.com/problems/longest-common-subsequence/",
            },
            {
                label: "Shortest Common Supersequence",
                url: "https://leetcode.com/problems/shortest-common-supersequence/",
            },
            {
                label: "Longest Palindromic Subsequence",
                url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            },
            {
                label: "Delete Operation for Two Strings",
                url: "https://leetcode.com/problems/delete-operation-for-two-strings/",
            },
            {
                label: "Minimize ASCII Delete Sum for Two Strings",
                url: "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/",
            },
            {
                label: "Longest Repeating Subsequence",
                url: "https://leetcode.com/problems/longest-repeating-subsequence/",
            },
            {
                label: "Interleaving String",
                url: "https://leetcode.com/problems/interleaving-string/",
            },
            {
                label: "Distinct Subsequences",
                url: "https://leetcode.com/problems/distinct-subsequences/",
            },
            {
                label: "Regular Expression Matching",
                url: "https://leetcode.com/problems/regular-expression-matching/",
            },
            {
                label: "Wildcard Matching",
                url: "https://leetcode.com/problems/wildcard-matching/",
            },
        ],
    },
    // Lecture 102
    {
        title: "Lecture 102",
        url: "https://www.youtube.com/watch?v=PGsgv6nXhLw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=111",
        videoEmbed: "https://www.youtube.com/embed/PGsgv6nXhLw",
        topics: [],
        questions: [
            {
                label: "Letter Combinations of a Phone Number",
                url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
            },
            {
                label: "Combination Sum",
                url: "https://leetcode.com/problems/combination-sum/",
            },
            {
                label: "Permutations",
                url: "https://leetcode.com/problems/permutations/",
            },
            {
                label: "Permutations II",
                url: "https://leetcode.com/problems/permutations-ii/",
            },
            {
                label: "Subsets",
                url: "https://leetcode.com/problems/subsets/",
            },
            {
                label: "Subsets II",
                url: "https://leetcode.com/problems/subsets-ii/",
            },
            {
                label: "Generate Parentheses",
                url: "https://leetcode.com/problems/generate-parentheses/",
            },
            {
                label: "Word Search",
                url: "https://leetcode.com/problems/word-search/",
            },
            {
                label: "Combination Sum II",
                url: "https://leetcode.com/problems/combination-sum-ii/",
            },
            {
                label: "Palindrome Partitioning",
                url: "https://leetcode.com/problems/palindrome-partitioning/",
            },
        ],
    },
    // Lecture 103
    {
        title: "Lecture 103",
        url: "https://www.youtube.com/watch?v=S31W3kohFDk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=112",
        videoEmbed: "https://www.youtube.com/embed/S31W3kohFDk",
        topics: [],
        questions: [
            {
                label: "N-Queens",
                url: "https://leetcode.com/problems/n-queens/",
            },
            {
                label: "N-Queens II",
                url: "https://leetcode.com/problems/n-queens-ii/",
            },
        ],
    },
    // Lecture 104
    {
        title: "Lecture 104",
        url: "https://www.youtube.com/watch?v=A3FHNCAkhxE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=113",
        videoEmbed: "https://www.youtube.com/embed/A3FHNCAkhxE",
        topics: [],
        questions: [
            {
                label: "Sudoku Solver",
                url: "https://leetcode.com/problems/sudoku-solver/",
            },
        ],
    },
    // Lecture 105
    {
        title: "Lecture 105",
        url: "https://www.youtube.com/watch?v=m9-H6AUBLgY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=114",
        videoEmbed: "https://www.youtube.com/embed/m9-H6AUBLgY",
        topics: [],
        questions: [
            {
                label: "Partition to K Equal Sum Subsets",
                url: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
            },
            {
                label: "Target Sum",
                url: "https://leetcode.com/problems/target-sum/",
            },
        ],
    },
    // Lecture 106
    {
        title: "Lecture 106",
        url: "https://www.youtube.com/watch?v=Fe2GeXEzWM0&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=115",
        videoEmbed: "https://www.youtube.com/embed/Fe2GeXEzWM0",
        topics: [],
        questions: [
            {
                label: "Unique Paths",
                url: "https://leetcode.com/problems/unique-paths/",
            },
            {
                label: "Unique Paths II",
                url: "https://leetcode.com/problems/unique-paths-ii/",
            },
            {
                label: "The Maze",
                url: "https://leetcode.com/problems/the-maze/",
            },
            {
                label: "The Maze II",
                url: "https://leetcode.com/problems/the-maze-ii/",
            },
            {
                label: "Rat in a Maze Problem - GFG",
                url: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
            },
            {
                label: "The Knight's Tour Problem - GFG",
                url: "https://practice.geeksforgeeks.org/problems/the-knights-tour-problem/0",
            },
            {
                label: "Rat in a Maze Problem with Multiple Steps Allowed - GFG",
                url: "https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem-with-multiple-steps-allowed/1",
            },
            {
                label: "Maze Solver - CodeSignal",
                url: "https://app.codesignal.com/interview-practice/task/SiMf5T2PEnzey6ZcM/description",
            },
        ],
    },
    // Lecture 107
    {
        title: "Lecture 107",
        url: "https://www.youtube.com/watch?v=MFAAZW2znv8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=116",
        videoEmbed: "https://www.youtube.com/embed/MFAAZW2znv8",
        topics: [],
        questions: [
            {
                label: "Knight Probability in Chessboard",
                url: "https://leetcode.com/problems/knight-probability-in-chessboard/",
            },
        ],
    },
    // Lecture 108
    {
        title: "Lecture 108",
        url: "https://www.youtube.com/watch?v=NW-BLDQHFXk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=117",
        videoEmbed: "https://www.youtube.com/embed/NW-BLDQHFXk",
        topics: [],
        questions: [
            {
                label: "Jump Game",
                url: "https://leetcode.com/problems/jump-game/",
            },
            {
                label: "Jump Game II",
                url: "https://leetcode.com/problems/jump-game-ii/",
            },
            {
                label: "Gas Station",
                url: "https://leetcode.com/problems/gas-station/",
            },
            {
                label: "Can Place Flowers",
                url: "https://leetcode.com/problems/can-place-flowers/",
            },
            {
                label: "Assign Cookies",
                url: "https://leetcode.com/problems/assign-cookies/",
            },
            {
                label: "Minimum Number of Arrows to Burst Balloons",
                url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
            },
            {
                label: "Non-overlapping Intervals",
                url: "https://leetcode.com/problems/non-overlapping-intervals/",
            },
            {
                label: "Partition Labels",
                url: "https://leetcode.com/problems/partition-labels/",
            },
            {
                label: "Queue Reconstruction by Height",
                url: "https://leetcode.com/problems/queue-reconstruction-by-height/",
            },
            {
                label: "Reorganize String",
                url: "https://leetcode.com/problems/reorganize-string/",
            },
        ],
    },
    // Lecture 109
    {
        title: "Lecture 109",
        url: "https://www.youtube.com/watch?v=5eFh5CC-8KY&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=118",
        videoEmbed: "https://www.youtube.com/embed/5eFh5CC-8KY",
        topics: [],
        questions: [
            {
                label: "Assign Cookies",
                url: "https://leetcode.com/problems/assign-cookies/",
            },
            {
                label: "Bag of Tokens",
                url: "https://leetcode.com/problems/bag-of-tokens/",
            },
            {
                label: "Task Scheduler",
                url: "https://leetcode.com/problems/task-scheduler/",
            },
            {
                label: "Car Pooling",
                url: "https://leetcode.com/problems/car-pooling/",
            },
            {
                label: "Minimum Cost to Connect Sticks",
                url: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
            },
        ],
    },
    // Lecture 110
    {
        title: "Lecture 110",
        url: "https://www.youtube.com/watch?v=xdPv2SZJLVI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=119",
        videoEmbed: "https://www.youtube.com/embed/xdPv2SZJLVI",
        topics: [],
        questions: [
            {
                label: "Maximum Length of Pair Chain",
                url: "https://leetcode.com/problems/maximum-length-of-pair-chain/",
            },
            {
                label: "Video Stitching",
                url: "https://leetcode.com/problems/video-stitching/",
            },
            {
                label: "Non-overlapping Intervals",
                url: "https://leetcode.com/problems/non-overlapping-intervals/",
            },
            {
                label: "Interval List Intersections",
                url: "https://leetcode.com/problems/interval-list-intersections/",
            },
            {
                label: "Merge Intervals",
                url: "https://leetcode.com/problems/merge-intervals/",
            },
            {
                label: "Insert Interval",
                url: "https://leetcode.com/problems/insert-interval/",
            },
        ],
    },
    // Lecture 111
    {
        title: "Lecture 111",
        url: "https://www.youtube.com/watch?v=Wct0mN2SCRQ&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=120",
        videoEmbed: "https://www.youtube.com/embed/Wct0mN2SCRQ",
        topics: [],
        questions: [
            {
                label: "Combination Sum IV - LeetCode",
                url: "https://leetcode.com/problems/combination-sum-iv/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Coin Change 2 - LeetCode",
                url: "https://leetcode.com/problems/coin-change-2/",
            },
            {
                label: "Target Sum - LeetCode",
                url: "https://leetcode.com/problems/target-sum/",
            },
            {
                label: "Unique Paths - LeetCode",
                url: "https://leetcode.com/problems/unique-paths/",
            },
            {
                label: "Unique Paths II - LeetCode",
                url: "https://leetcode.com/problems/unique-paths-ii/",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Last Stone Weight II - LeetCode",
                url: "https://leetcode.com/problems/last-stone-weight-ii/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Perfect Squares - LeetCode",
                url: "https://leetcode.com/problems/perfect-squares/",
            },
            {
                label: "Rod Cutting - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/rod-cutting/0",
            },
            {
                label: "Knapsack Problem - HackerRank",
                url: "https://www.hackerrank.com/challenges/unbounded-knapsack/problem",
            },
            {
                label: "Minimum Cost to Merge Stones - CodeChef",
                url: "https://www.codechef.com/problems/MERGESTONES",
            },
            {
                label: "Super Egg Drop - LeetCode",
                url: "https://leetcode.com/problems/super-egg-drop/",
            },
        ],
    },
    // Lecture 112
    {
        title: "Lecture 112",
        url: "https://www.youtube.com/watch?v=aJTCcyPrPOA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=121",
        videoEmbed: "https://www.youtube.com/embed/aJTCcyPrPOA",
        topics: [],
        questions: [
            {
                label: "Perfect Squares - LeetCode",
                url: "https://leetcode.com/problems/perfect-squares/",
            },
            {
                label: "Sum of Square Numbers - LeetCode",
                url: "https://leetcode.com/problems/sum-of-square-numbers/",
            },
            {
                label: "Valid Perfect Square - LeetCode",
                url: "https://leetcode.com/problems/valid-perfect-square/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Combination Sum IV - LeetCode",
                url: "https://leetcode.com/problems/combination-sum-iv/",
            },
            {
                label: "Squares of a Sorted Array - LeetCode",
                url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
            },
            {
                label: "Squares of Sorted Array - LeetCode",
                url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
            },
            {
                label: "Jump Game - LeetCode",
                url: "https://leetcode.com/problems/jump-game/",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Ugly Number II - LeetCode",
                url: "https://leetcode.com/problems/ugly-number-ii/",
            },
            {
                label: "Ugly Number - LeetCode",
                url: "https://leetcode.com/problems/ugly-number/",
            },
            {
                label: "Ugly Number III - LeetCode",
                url: "https://leetcode.com/problems/ugly-number-iii/",
            },
            {
                label: "Last Stone Weight II - LeetCode",
                url: "https://leetcode.com/problems/last-stone-weight-ii/",
            },
            {
                label: "Minimum Number of Arrows to Burst Balloons",
                url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
            },
        ],
    },
    // Lecture 113
    {
        title: "Lecture 113",
        url: "https://www.youtube.com/watch?v=oZ_xAIGCXw4&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=122",
        videoEmbed: "https://www.youtube.com/embed/oZ_xAIGCXw4",
        topics: [],
        questions: [
            {
                label: "Minimum Cost For Tickets",
                url: "https://leetcode.com/problems/minimum-cost-for-tickets/",
            },
            {
                label: "Jump Game II - LeetCode",
                url: "https://leetcode.com/problems/jump-game-ii/",
            },
            {
                label: "Jump Game - LeetCode",
                url: "https://leetcode.com/problems/jump-game/",
            },
            {
                label: "Min Cost Climbing Stairs - LeetCode",
                url: "https://leetcode.com/problems/min-cost-climbing-stairs/",
            },
            {
                label: "House Robber - LeetCode",
                url: "https://leetcode.com/problems/house-robber/",
            },
            {
                label: "House Robber II - LeetCode",
                url: "https://leetcode.com/problems/house-robber-ii/",
            },
            {
                label: "Paint House - LeetCode",
                url: "https://leetcode.com/problems/paint-house/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Partition Equal Subset Sum",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Burst Balloons - LeetCode",
                url: "https://leetcode.com/problems/burst-balloons/",
            },
            {
                label: "Cheapest Flights Within K Stops - LeetCode",
                url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
            },
            {
                label: "Cost of Data - CodeChef",
                url: "https://www.codechef.com/problems/COSTDATA",
            },
            {
                label: "Train Tickets - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_c",
            },
        ],
    },
    // Lecture 114
    {
        title: "Lecture 114",
        url: "https://www.youtube.com/watch?v=U5f__4we_Jc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=123",
        videoEmbed: "https://www.youtube.com/embed/U5f__4we_Jc",
        topics: [],
        questions: [
            {
                label: "Minimum Cost For Tickets",
                url: "https://leetcode.com/problems/minimum-cost-for-tickets/",
            },
            {
                label: "Jump Game II - LeetCode",
                url: "https://leetcode.com/problems/jump-game-ii/",
            },
            {
                label: "Min Cost Climbing Stairs - LeetCode",
                url: "https://leetcode.com/problems/min-cost-climbing-stairs/",
            },
            {
                label: "House Robber - LeetCode",
                url: "https://leetcode.com/problems/house-robber/",
            },
            {
                label: "House Robber II - LeetCode",
                url: "https://leetcode.com/problems/house-robber-ii/",
            },
            {
                label: "Paint House - LeetCode",
                url: "https://leetcode.com/problems/paint-house/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Burst Balloons - LeetCode",
                url: "https://leetcode.com/problems/burst-balloons/",
            },
            {
                label: "Cheapest Flights Within K Stops - LeetCode",
                url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
            },
            {
                label: "Cheapest Flights With K Stops - HackerRank",
                url: "https://www.hackerrank.com/challenges/cheapest-flights-with-k-stops/problem",
            },
            {
                label: "Cost of Data - CodeChef",
                url: "https://www.codechef.com/problems/COSTDATA",
            },
            {
                label: "Train Tickets - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_c",
            },
            {
                label: "Minimum Cost of Ropes - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes/0",
            },
        ],
    },
    // Lecture 115
    {
        title: "Lecture 115",
        url: "https://www.youtube.com/watch?v=tuhjovVtDII&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=142",
        videoEmbed: "https://www.youtube.com/embed/tuhjovVtDII",
        topics: [],
        questions: [
            {
                label: "Maximal Square - LeetCode",
                url: "https://leetcode.com/problems/maximal-square/",
            },
            {
                label: "Largest Rectangle in Histogram - LeetCode",
                url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
            },
            {
                label: "Maximal Rectangle - LeetCode",
                url: "https://leetcode.com/problems/maximal-rectangle/",
            },
            {
                label: "Largest Square Area - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix/0",
            },
            {
                label: "Maximal Square - HackerRank",
                url: "https://www.hackerrank.com/challenges/maximal-square/problem",
            },
            {
                label: "Largest Rectangle of 1s - CodeChef",
                url: "https://www.codechef.com/problems/MAXREC",
            },
            {
                label: "Largest Square Area - Codeforces",
                url: "https://codeforces.com/problemset/problem/992/A",
            },
            {
                label: "Largest Square in Matrix - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_d",
            },
            {
                label: "Maximal Rectangle - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/maximal-rectangle/0",
            },
            {
                label: "Maximum Square - CodeSignal",
                url: "https://app.codesignal.com/interview-practice/task/izLStT2s8keBAA8s5",
            },
        ],
    },
    // Lecture 116
    {
        title: "Lecture 116",
        url: "https://www.youtube.com/watch?v=Eo4G_LPCgX8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=125",
        videoEmbed: "https://www.youtube.com/embed/Eo4G_LPCgX8",
        topics: [],
        questions: [
            {
                label: "Min Score Triangulation of Polygon - LeetCode",
                url: "https://leetcode.com/problems/minimum-score-triangulation-of-polygon/",
            },
            {
                label: "Triangle - LeetCode",
                url: "https://leetcode.com/problems/triangle/",
            },
            {
                label: "Burst Balloons - LeetCode",
                url: "https://leetcode.com/problems/burst-balloons/",
            },
            {
                label: "Super Egg Drop - LeetCode",
                url: "https://leetcode.com/problems/super-egg-drop/",
            },
            {
                label: "Longest Palindromic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            },
            {
                label: "Burst Balloons - HackerRank",
                url: "https://www.hackerrank.com/challenges/burst-balloons/problem",
            },
            {
                label: "Minimum Cost Polygon Triangulation - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/minimum-cost-polygon-triangulation/0",
            },
            {
                label: "Burst Balloons - Codeforces",
                url: "https://codeforces.com/problemset/problem/510/B",
            },
            {
                label: "Polygon Triangulation - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_e",
            },
            {
                label: "Minimum Score Triangulation of Polygon - CodeChef",
                url: "https://www.codechef.com/problems/MSTP",
            },
        ],
    },
    // Lecture 117
    {
        title: "Lecture 117",
        url: "https://www.youtube.com/watch?v=dvTTtzamEEo&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=126",
        videoEmbed: "https://www.youtube.com/embed/dvTTtzamEEo",
        topics: [],
        questions: [
            {
                label: "Minimum Sideways Jump - LeetCode",
                url: "https://leetcode.com/problems/minimum-sideways-jump/",
            },
            {
                label: "Jump Game - LeetCode",
                url: "https://leetcode.com/problems/jump-game/",
            },
            {
                label: "Jump Game II - LeetCode",
                url: "https://leetcode.com/problems/jump-game-ii/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Min Cost Climbing Stairs - LeetCode",
                url: "https://leetcode.com/problems/min-cost-climbing-stairs/",
            },
            {
                label: "Unique Paths - LeetCode",
                url: "https://leetcode.com/problems/unique-paths/",
            },
            {
                label: "Unique Paths II - LeetCode",
                url: "https://leetcode.com/problems/unique-paths-ii/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Coin Change 2 - LeetCode",
                url: "https://leetcode.com/problems/coin-change-2/",
            },
            {
                label: "Cheapest Flights Within K Stops - LeetCode",
                url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
            },
            {
                label: "Minimum Path Sum - HackerRank",
                url: "https://www.hackerrank.com/challenges/minimum-path-sum/problem",
            },
            {
                label: "Minimum Path Cost - Codeforces",
                url: "https://codeforces.com/problemset/problem/122/A",
            },
            {
                label: "Minimum Cost - CodeChef",
                url: "https://www.codechef.com/problems/MINCOST",
            },
            {
                label: "Minimum Cost - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_f",
            },
        ],
    },
    // Lecture 118
    {
        title: "Lecture 118",
        url: "https://www.youtube.com/watch?v=_iGlRDLPLxM&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=127",
        videoEmbed: "https://www.youtube.com/embed/_iGlRDLPLxM",
        topics: [],
        questions: [
            {
                label: "Reducing Dishes - LeetCode",
                url: "https://leetcode.com/problems/reducing-dishes/",
            },
            {
                label: "Maximum Profit in Job Scheduling - LeetCode",
                url: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
            },
            {
                label: "Longest Increasing Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Russian Doll Envelopes - LeetCode",
                url: "https://leetcode.com/problems/russian-doll-envelopes/",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Burst Balloons - LeetCode",
                url: "https://leetcode.com/problems/burst-balloons/",
            },
            {
                label: "House Robber - LeetCode",
                url: "https://leetcode.com/problems/house-robber/",
            },
            {
                label: "House Robber II - LeetCode",
                url: "https://leetcode.com/problems/house-robber-ii/",
            },
            {
                label: "Reducing Dishes - HackerRank",
                url: "https://www.hackerrank.com/challenges/reducing-dishes/problem",
            },
            {
                label: "Dish Reduction - Codeforces",
                url: "https://codeforces.com/problemset/problem/1442/A",
            },
            {
                label: "Dish Reduction - CodeChef",
                url: "https://www.codechef.com/problems/REDDISH",
            },
            {
                label: "Dish Reduction - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_g",
            },
        ],
    },
    // Lecture 119
    {
        title: "Lecture 119",
        url: "https://www.youtube.com/watch?v=QZ9edJ0JCPw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=132",
        videoEmbed: "https://www.youtube.com/embed/QZ9edJ0JCPw",
        topics: [],
        questions: [
            {
                label: "Longest Increasing Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Russian Doll Envelopes - LeetCode",
                url: "https://leetcode.com/problems/russian-doll-envelopes/",
            },
            {
                label: "Patience Sort - LeetCode",
                url: "https://leetcode.com/problems/patience-sort/",
            },
            {
                label: "Longest Common Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-common-subsequence/",
            },
            {
                label: "Longest Palindromic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            },
            {
                label: "Longest Repeated Subsequence - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/longest-repeated-subsequence/0",
            },
            {
                label: "Increasing Subsequence - Codeforces",
                url: "https://codeforces.com/problemset/problem/264/B",
            },
            {
                label: "Longest Increasing Subsequence - HackerRank",
                url: "https://www.hackerrank.com/challenges/longest-increasing-subsequences/problem",
            },
            {
                label: "Longest Increasing Subsequence - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_h",
            },
            {
                label: "LIS - CodeChef",
                url: "https://www.codechef.com/problems/LIS",
            },
        ],
    },
    // Lecture 120
    {
        title: "Lecture 120",
        url: "https://www.youtube.com/watch?v=Ntzuz7XsdCI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=133",
        videoEmbed: "https://www.youtube.com/embed/Ntzuz7XsdCI",
        topics: [],
        questions: [
            {
                label: "Maximum Height by Stacking Cuboids - LeetCode",
                url: "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/",
            },
            {
                label: "Russian Doll Envelopes - LeetCode",
                url: "https://leetcode.com/problems/russian-doll-envelopes/",
            },
            {
                label: "Longest Increasing Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Tallest Billboard - LeetCode",
                url: "https://leetcode.com/problems/tallest-billboard/",
            },
            {
                label: "Box Stacking - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/box-stacking/1",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Burst Balloons - LeetCode",
                url: "https://leetcode.com/problems/burst-balloons/",
            },
            {
                label: "House Robber - LeetCode",
                url: "https://leetcode.com/problems/house-robber/",
            },
            {
                label: "House Robber II - LeetCode",
                url: "https://leetcode.com/problems/house-robber-ii/",
            },
            {
                label: "Cuboid Stacking - HackerRank",
                url: "https://www.hackerrank.com/challenges/cuboid-stacking/problem",
            },
            {
                label: "Cuboid Stacking - Codeforces",
                url: "https://codeforces.com/problemset/problem/1661/A",
            },
            {
                label: "Cuboid Stacking - CodeChef",
                url: "https://www.codechef.com/problems/CUBOIDSTACK",
            },
        ],
    },
    // Lecture 121
    {
        title: "Lecture 121",
        url: "https://www.youtube.com/watch?v=QZ9edJ0JCPw&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=130",
        videoEmbed: "https://www.youtube.com/embed/QZ9edJ0JCPw",
        topics: [],
        questions: [
            {
                label: "Number of Dice Rolls with Target Sum - LeetCode",
                url: "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/",
            },
            {
                label: "Target Sum - LeetCode",
                url: "https://leetcode.com/problems/target-sum/",
            },
            {
                label: "Combination Sum IV - LeetCode",
                url: "https://leetcode.com/problems/combination-sum-iv/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Coin Change 2 - LeetCode",
                url: "https://leetcode.com/problems/coin-change-2/",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Dice Roll Simulation - LeetCode",
                url: "https://leetcode.com/problems/dice-roll-simulation/",
            },
            {
                label: "Minimum Path Sum - HackerRank",
                url: "https://www.hackerrank.com/challenges/minimum-path-sum/problem",
            },
            {
                label: "Number of Dice Rolls - Codeforces",
                url: "https://codeforces.com/problemset/problem/1256/A",
            },
            {
                label: "Number of Dice Rolls - CodeChef",
                url: "https://www.codechef.com/problems/DICEROLLS",
            },
            {
                label: "Number of Dice Rolls - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_j",
            },
            {
                label: "Dice Rolls - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/dice-rolls/0",
            },
        ],
    },
    // Lecture 122
    {
        title: "Lecture 122",
        url: "https://www.youtube.com/watch?v=UGY7FMHt-M8&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=132",
        videoEmbed: "https://www.youtube.com/embed/UGY7FMHt-M8",
        topics: [],
        questions: [
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Target Sum - LeetCode",
                url: "https://leetcode.com/problems/target-sum/",
            },
            {
                label: "Combination Sum IV - LeetCode",
                url: "https://leetcode.com/problems/combination-sum-iv/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Coin Change 2 - LeetCode",
                url: "https://leetcode.com/problems/coin-change-2/",
            },
            {
                label: "Partition Array for Maximum Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-array-for-maximum-sum/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Partition Array into Disjoint Intervals - LeetCode",
                url: "https://leetcode.com/problems/partition-array-into-disjoint-intervals/",
            },
            {
                label: "Subset Sum Problem - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/subset-sum-problem/0",
            },
            {
                label: "Partition Array for Maximum Sum - HackerRank",
                url: "https://www.hackerrank.com/challenges/partition-array-for-maximum-sum/problem",
            },
            {
                label: "Partition Array for Maximum Sum - Codeforces",
                url: "https://codeforces.com/problemset/problem/109/C",
            },
            {
                label: "Partition Array for Maximum Sum - CodeChef",
                url: "https://www.codechef.com/problems/PARTITION",
            },
            {
                label: "Partition Array for Maximum Sum - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_x",
            },
        ],
    },
    // Lecture 123
    {
        title: "Lecture 123",
        url: "https://www.youtube.com/watch?v=y1b8pObvndA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=143",
        videoEmbed: "https://www.youtube.com/embed/y1b8pObvndA",
        topics: [],
        questions: [
            {
                label: "Distinct Subsequences - LeetCode",
                url: "https://leetcode.com/problems/distinct-subsequences/",
            },
            {
                label: "Distinct Subsequences II - LeetCode",
                url: "https://leetcode.com/problems/distinct-subsequences-ii/",
            },
            {
                label: "Number of Subsequences That Satisfy the Given Sum Condition - LeetCode",
                url: "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/",
            },
            {
                label: "Longest Increasing Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Longest Common Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-common-subsequence/",
            },
            {
                label: "Longest Palindromic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            },
            {
                label: "Arithmetic Subarrays - LeetCode",
                url: "https://leetcode.com/problems/arithmetic-subarrays/",
            },
            {
                label: "Longest Arithmetic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
            },
            {
                label: "Longest Arithmetic Subsequence of Given Difference - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/",
            },
            {
                label: "Subsequences with Given Sum - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/subsequences-with-given-sum/0",
            },
            {
                label: "Distinct Subsequences - HackerRank",
                url: "https://www.hackerrank.com/challenges/distinct-subsequences/problem",
            },
            {
                label: "Distinct Subsequences - Codeforces",
                url: "https://codeforces.com/problemset/problem/109/D",
            },
            {
                label: "Distinct Subsequences - CodeChef",
                url: "https://www.codechef.com/problems/DISTINCT",
            },
            {
                label: "Distinct Subsequences - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_z",
            },
        ],
    },
    // Lecture 124
    {
        title: "Lecture 124",
        url: "https://www.youtube.com/watch?v=OgovJ9CB0hI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=148",
        videoEmbed: "https://www.youtube.com/embed/OgovJ9CB0hI",
        topics: [],
        questions: [
            {
                label: "Distinct Subsequences II - LeetCode",
                url: "https://leetcode.com/problems/distinct-subsequences-ii/",
            },
            {
                label: "Distinct Subsequences - LeetCode",
                url: "https://leetcode.com/problems/distinct-subsequences/",
            },
            {
                label: "Number of Subsequences That Satisfy the Given Sum Condition - LeetCode",
                url: "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/",
            },
            {
                label: "Longest Increasing Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Longest Common Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-common-subsequence/",
            },
            {
                label: "Longest Palindromic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            },
            {
                label: "Arithmetic Subarrays - LeetCode",
                url: "https://leetcode.com/problems/arithmetic-subarrays/",
            },
            {
                label: "Longest Arithmetic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
            },
            {
                label: "Longest Arithmetic Subsequence of Given Difference - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/",
            },
            {
                label: "Subsequences with Given Sum - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/subsequences-with-given-sum/0",
            },
            {
                label: "Distinct Subsequences - HackerRank",
                url: "https://www.hackerrank.com/challenges/distinct-subsequences/problem",
            },
            {
                label: "Distinct Subsequences - Codeforces",
                url: "https://codeforces.com/problemset/problem/109/D",
            },
            {
                label: "Distinct Subsequences - CodeChef",
                url: "https://www.codechef.com/problems/DISTINCT",
            },
            {
                label: "Distinct Subsequences - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_z",
            },
        ],
    },
    // Lecture 125
    {
        title: "Lecture 125",
        url: "https://www.youtube.com/watch?v=y1b8pObvndA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=146",
        videoEmbed: "https://www.youtube.com/embed/y1b8pObvndA",
        topics: [],
        questions: [
            {
                label: "Longest Arithmetic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
            },
            {
                label: "Longest Arithmetic Subsequence of Given Difference - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/",
            },
            {
                label: "Longest Increasing Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Longest Common Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-common-subsequence/",
            },
            {
                label: "Longest Palindromic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            },
            {
                label: "Arithmetic Subarrays - LeetCode",
                url: "https://leetcode.com/problems/arithmetic-subarrays/",
            },
            {
                label: "Longest Arithmetic Subsequence - HackerRank",
                url: "https://www.hackerrank.com/challenges/longest-arithmetic-subsequence/problem",
            },
            {
                label: "Longest Arithmetic Subsequence - Codeforces",
                url: "https://codeforces.com/problemset/problem/264/B",
            },
            {
                label: "Longest Arithmetic Subsequence - CodeChef",
                url: "https://www.codechef.com/problems/LONGARITH",
            },
            {
                label: "Longest Arithmetic Subsequence - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_m",
            },
            {
                label: "Longest Arithmetic Progression - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/longest-ap-with-given-difference/0",
            },
            {
                label: "Longest Arithmetic Progression - CodeSignal",
                url: "https://app.codesignal.com/interview-practice/task/6LrEx5x7Hk6FiKvj7",
            },
            {
                label: "Arithmetic Subsequences - HackerRank",
                url: "https://www.hackerrank.com/challenges/arithmetic-subsequences/problem",
            },
            {
                label: "Longest AP with Given Difference - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/longest-ap-with-given-difference/0",
            },
        ],
    },
    // Lecture 126
    {
        title: "Lecture 126",
        url: "https://www.youtube.com/watch?v=IOOFHFXenQU&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=135",
        videoEmbed: "https://www.youtube.com/embed/IOOFHFXenQU",
        topics: [],
        questions: [
            {
                label: "Longest Arithmetic Subsequence of Given Difference - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/",
            },
            {
                label: "Longest Arithmetic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
            },
            {
                label: "Longest Increasing Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Longest Common Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-common-subsequence/",
            },
            {
                label: "Longest Palindromic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            },
            {
                label: "Arithmetic Subarrays - LeetCode",
                url: "https://leetcode.com/problems/arithmetic-subarrays/",
            },
            {
                label: "Longest Arithmetic Subsequence - HackerRank",
                url: "https://www.hackerrank.com/challenges/longest-arithmetic-subsequence/problem",
            },
            {
                label: "Longest Arithmetic Subsequence - Codeforces",
                url: "https://codeforces.com/problemset/problem/264/B",
            },
            {
                label: "Longest Arithmetic Subsequence - CodeChef",
                url: "https://www.codechef.com/problems/LONGARITH",
            },
            {
                label: "Longest Arithmetic Subsequence - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_n",
            },
            {
                label: "Longest AP with Given Difference - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/longest-ap-with-given-difference/0",
            },
            {
                label: "Longest AP with Given Difference - CodeSignal",
                url: "https://app.codesignal.com/interview-practice/task/6LrEx5x7Hk6FiKvj7",
            },
            {
                label: "Arithmetic Subsequences - HackerRank",
                url: "https://www.hackerrank.com/challenges/arithmetic-subsequences/problem",
            },
            {
                label: "Longest AP with Given Difference - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/longest-ap-with-given-difference/0",
            },
        ],
    },
    // Lecture 127
    {
        title: "Lecture 127",
        url: "https://www.youtube.com/watch?v=8HEjwf28LyE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=146",
        videoEmbed: "https://www.youtube.com/embed/8HEjwf28LyE",
        topics: [],
        questions: [
            {
                label: "Unique Binary Search Trees - LeetCode",
                url: "https://leetcode.com/problems/unique-binary-search-trees/",
            },
            {
                label: "Unique Binary Search Trees II - LeetCode",
                url: "https://leetcode.com/problems/unique-binary-search-trees-ii/",
            },
            {
                label: "Number of Valid Parentheses Combinations - LeetCode",
                url: "https://leetcode.com/problems/number-of-valid-parentheses-combinations/",
            },
            {
                label: "Different Ways to Add Parentheses - LeetCode",
                url: "https://leetcode.com/problems/different-ways-to-add-parentheses/",
            },
            {
                label: "Out of Boundary Paths - LeetCode",
                url: "https://leetcode.com/problems/out-of-boundary-paths/",
            },
            {
                label: "Count of Smaller Numbers After Self - LeetCode",
                url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
            },
            {
                label: "Count of Range Sum - LeetCode",
                url: "https://leetcode.com/problems/count-of-range-sum/",
            },
            {
                label: "Count Numbers with Unique Digits - LeetCode",
                url: "https://leetcode.com/problems/count-numbers-with-unique-digits/",
            },
            {
                label: "Range Sum Query - LeetCode",
                url: "https://leetcode.com/problems/range-sum-query/",
            },
            {
                label: "Range Sum of BST - LeetCode",
                url: "https://leetcode.com/problems/range-sum-of-bst/",
            },
            {
                label: "Binary Search Tree - HackerRank",
                url: "https://www.hackerrank.com/challenges/binary-search-tree/problem",
            },
            {
                label: "Unique Binary Search Trees - Codeforces",
                url: "https://codeforces.com/problemset/problem/31/B",
            },
            {
                label: "Unique Binary Search Trees - CodeChef",
                url: "https://www.codechef.com/problems/UNIBST",
            },
            {
                label: "Unique Binary Search Trees - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_o",
            },
        ],
    },
    // Lecture 128
    {
        title: "Lecture 128",
        url: "https://www.youtube.com/watch?v=OgovJ9CB0hI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=148",
        videoEmbed: "https://www.youtube.com/embed/OgovJ9CB0hI",
        topics: [],
        questions: [
            {
                label: "Guess Number Higher or Lower - LeetCode",
                url: "https://leetcode.com/problems/guess-number-higher-or-lower/",
            },
            {
                label: "Guess Number Higher or Lower II - LeetCode",
                url: "https://leetcode.com/problems/guess-number-higher-or-lower-ii/",
            },
            {
                label: "Super Egg Drop - LeetCode",
                url: "https://leetcode.com/problems/super-egg-drop/",
            },
            {
                label: "Binary Search - LeetCode",
                url: "https://leetcode.com/problems/binary-search/",
            },
            {
                label: "Search in Rotated Sorted Array - LeetCode",
                url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            },
            {
                label: "Search a 2D Matrix - LeetCode",
                url: "https://leetcode.com/problems/search-a-2d-matrix/",
            },
            {
                label: "Kth Smallest Element in a Sorted Matrix - LeetCode",
                url: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
            },
            {
                label: "Find Minimum in Rotated Sorted Array - LeetCode",
                url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
            },
            {
                label: "Find Peak Element - LeetCode",
                url: "https://leetcode.com/problems/find-peak-element/",
            },
            {
                label: "Median of Two Sorted Arrays - LeetCode",
                url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
            },
            {
                label: "Guess Number - HackerRank",
                url: "https://www.hackerrank.com/challenges/guess-number/problem",
            },
            {
                label: "Guess Number - Codeforces",
                url: "https://codeforces.com/problemset/problem/109/A",
            },
            {
                label: "Guess Number - CodeChef",
                url: "https://www.codechef.com/problems/GUESS",
            },
            {
                label: "Guess Number - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_p",
            },
        ],
    },
    // Lecture 129
    {
        title: "Lecture 129",
        url: "https://www.youtube.com/watch?v=LDiD9fr28tc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=138",
        videoEmbed: "https://www.youtube.com/embed/LDiD9fr28tc",
        topics: [],
        questions: [
            {
                label: "Minimum Cost Tree From Leaf Values - LeetCode",
                url: "https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/",
            },
            {
                label: "Minimum Cost to Cut a Stick - LeetCode",
                url: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",
            },
            {
                label: "Binary Tree Pruning - LeetCode",
                url: "https://leetcode.com/problems/binary-tree-pruning/",
            },
            {
                label: "Binary Tree Maximum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
            },
            {
                label: "Maximum Depth of Binary Tree - LeetCode",
                url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            },
            {
                label: "Balanced Binary Tree - LeetCode",
                url: "https://leetcode.com/problems/balanced-binary-tree/",
            },
            {
                label: "Path Sum - LeetCode",
                url: "https://leetcode.com/problems/path-sum/",
            },
            {
                label: "Count Complete Tree Nodes - LeetCode",
                url: "https://leetcode.com/problems/count-complete-tree-nodes/",
            },
            {
                label: "Construct Binary Tree from Preorder and Inorder Traversal - LeetCode",
                url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
            },
            {
                label: "Construct Binary Tree from Inorder and Postorder Traversal - LeetCode",
                url: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
            },
            {
                label: "Binary Tree - HackerRank",
                url: "https://www.hackerrank.com/challenges/binary-tree/problem",
            },
            {
                label: "Minimum Cost Tree - Codeforces",
                url: "https://codeforces.com/problemset/problem/1081/A",
            },
            {
                label: "Minimum Cost Tree - CodeChef",
                url: "https://www.codechef.com/problems/MINTREE",
            },
            {
                label: "Minimum Cost Tree - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_q",
            },
        ],
    },
    // Lecture 130
    {
        title: "Lecture 130",
        url: "https://www.youtube.com/watch?v=BSRTUtvJSIk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=139",
        videoEmbed: "https://www.youtube.com/embed/BSRTUtvJSIk",
        topics: [],
        questions: [
            {
                label: "Best Time to Buy and Sell Stock - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            },
            {
                label: "Best Time to Buy and Sell Stock II - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
            },
            {
                label: "Best Time to Buy and Sell Stock III - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
            },
            {
                label: "Best Time to Buy and Sell Stock IV - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
            },
            {
                label: "Best Time to Buy and Sell Stock with Cooldown - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
            },
            {
                label: "Best Time to Buy and Sell Stock with Transaction Fee - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
            },
            {
                label: "Stock Prices - HackerRank",
                url: "https://www.hackerrank.com/challenges/stock-prices/problem",
            },
            {
                label: "Stock Trading - Codeforces",
                url: "https://codeforces.com/problemset/problem/1081/B",
            },
            {
                label: "Stock Trading - CodeChef",
                url: "https://www.codechef.com/problems/STOCKTRADE",
            },
            {
                label: "Stock Trading - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_r",
            },
        ],
    },
    // Lecture 131
    {
        title: "Lecture 131",
        url: "https://www.youtube.com/watch?v=y1b8pObvndA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=146",
        videoEmbed: "https://www.youtube.com/embed/y1b8pObvndA",
        topics: [],
        questions: [
            {
                label: "Best Time to Buy and Sell Stock II - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
            },
            {
                label: "Best Time to Buy and Sell Stock - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            },
            {
                label: "Best Time to Buy and Sell Stock III - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
            },
            {
                label: "Best Time to Buy and Sell Stock IV - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
            },
            {
                label: "Best Time to Buy and Sell Stock with Cooldown - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
            },
            {
                label: "Best Time to Buy and Sell Stock with Transaction Fee - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
            },
            {
                label: "Stock Prices - HackerRank",
                url: "https://www.hackerrank.com/challenges/stock-prices/problem",
            },
            {
                label: "Stock Trading - Codeforces",
                url: "https://codeforces.com/problemset/problem/1081/B",
            },
            {
                label: "Stock Trading - CodeChef",
                url: "https://www.codechef.com/problems/STOCKTRADE",
            },
            {
                label: "Stock Trading - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_s",
            },
        ],
    },
    // Lecture 132
    {
        title: "Lecture 132",
        url: "https://www.youtube.com/watch?v=HZOUwKCKF5o&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=147",
        videoEmbed: "https://www.youtube.com/embed/HZOUwKCKF5o",
        topics: [],
        questions: [
            {
                label: "Last Stone Weight II - LeetCode",
                url: "https://leetcode.com/problems/last-stone-weight-ii/",
            },
            {
                label: "Last Stone Weight - LeetCode",
                url: "https://leetcode.com/problems/last-stone-weight/",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Target Sum - LeetCode",
                url: "https://leetcode.com/problems/target-sum/",
            },
            {
                label: "Combination Sum IV - LeetCode",
                url: "https://leetcode.com/problems/combination-sum-iv/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Coin Change 2 - LeetCode",
                url: "https://leetcode.com/problems/coin-change-2/",
            },
            {
                label: "Partition Array for Maximum Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-array-for-maximum-sum/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Partition Array into Disjoint Intervals - LeetCode",
                url: "https://leetcode.com/problems/partition-array-into-disjoint-intervals/",
            },
            {
                label: "Subset Sum Problem - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/subset-sum-problem/0",
            },
            {
                label: "Last Stone Weight II - HackerRank",
                url: "https://www.hackerrank.com/challenges/last-stone-weight-ii/problem",
            },
            {
                label: "Last Stone Weight II - Codeforces",
                url: "https://codeforces.com/problemset/problem/109/B",
            },
        ],
    },
    // Lecture 133
    {
        title: "Lecture 133",
        url: "https://www.youtube.com/watch?v=tuhjovVtDII&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=148",
        videoEmbed: "https://www.youtube.com/embed/tuhjovVtDII",
        topics: [],
        questions: [
            {
                label: "Partition Array for Maximum Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-array-for-maximum-sum/",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Target Sum - LeetCode",
                url: "https://leetcode.com/problems/target-sum/",
            },
            {
                label: "Combination Sum IV - LeetCode",
                url: "https://leetcode.com/problems/combination-sum-iv/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Coin Change 2 - LeetCode",
                url: "https://leetcode.com/problems/coin-change-2/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Partition Array into Disjoint Intervals - LeetCode",
                url: "https://leetcode.com/problems/partition-array-into-disjoint-intervals/",
            },
            {
                label: "Subset Sum Problem - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/subset-sum-problem/0",
            },
            {
                label: "Partition Array for Maximum Sum - HackerRank",
                url: "https://www.hackerrank.com/challenges/partition-array-for-maximum-sum/problem",
            },
            {
                label: "Partition Array for Maximum Sum - Codeforces",
                url: "https://codeforces.com/problemset/problem/109/C",
            },
            {
                label: "Partition Array for Maximum Sum - CodeChef",
                url: "https://www.codechef.com/problems/PARTITION",
            },
            {
                label: "Partition Array for Maximum Sum - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_x",
            },
        ],
    },
    // Lecture 134
    {
        title: "Lecture 134",
        url: "https://www.youtube.com/watch?v=y1b8pObvndA&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=146",
        videoEmbed: "https://www.youtube.com/embed/y1b8pObvndA",
        topics: [],
        questions: [
            {
                label: "Distinct Subsequences - LeetCode",
                url: "https://leetcode.com/problems/distinct-subsequences/",
            },
            {
                label: "Distinct Subsequences II - LeetCode",
                url: "https://leetcode.com/problems/distinct-subsequences-ii/",
            },
            {
                label: "Number of Subsequences That Satisfy the Given Sum Condition - LeetCode",
                url: "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/",
            },
            {
                label: "Longest Increasing Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Longest Common Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-common-subsequence/",
            },
            {
                label: "Longest Palindromic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            },
            {
                label: "Arithmetic Subarrays - LeetCode",
                url: "https://leetcode.com/problems/arithmetic-subarrays/",
            },
            {
                label: "Longest Arithmetic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
            },
            {
                label: "Longest Arithmetic Subsequence of Given Difference - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/",
            },
            {
                label: "Subsequences with Given Sum - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/subsequences-with-given-sum/0",
            },
            {
                label: "Distinct Subsequences - HackerRank",
                url: "https://www.hackerrank.com/challenges/distinct-subsequences/problem",
            },
            {
                label: "Distinct Subsequences - Codeforces",
                url: "https://codeforces.com/problemset/problem/109/D",
            },
            {
                label: "Distinct Subsequences - CodeChef",
                url: "https://www.codechef.com/problems/DISTINCT",
            },
            {
                label: "Distinct Subsequences - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_z",
            },
        ],
    },
    // Lecture 135
    {
        title: "Lecture 135",
        url: "https://www.youtube.com/watch?v=8HEjwf28LyE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=147",
        videoEmbed: "https://www.youtube.com/embed/8HEjwf28LyE",
        topics: [],
        questions: [
            {
                label: "Best Time to Buy and Sell Stock with Transaction Fee - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",
            },
            {
                label: "Best Time to Buy and Sell Stock with Cooldown - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
            },
            {
                label: "Best Time to Buy and Sell Stock IV - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",
            },
            {
                label: "Best Time to Buy and Sell Stock III - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
            },
            {
                label: "Best Time to Buy and Sell Stock II - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
            },
            {
                label: "Best Time to Buy and Sell Stock - LeetCode",
                url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            },
            {
                label: "Stock Prices - HackerRank",
                url: "https://www.hackerrank.com/challenges/stock-prices/problem",
            },
            {
                label: "Stock Trading - Codeforces",
                url: "https://codeforces.com/problemset/problem/1081/B",
            },
            {
                label: "Stock Trading - CodeChef",
                url: "https://www.codechef.com/problems/STOCKTRADE",
            },
            {
                label: "Stock Trading - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_w",
            },
        ],
    },
    // Lecture 136
    {
        title: "Lecture 136",
        url: "https://www.youtube.com/watch?v=U095bJJtW3w&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=149",
        videoEmbed: "https://www.youtube.com/embed/U095bJJtW3w",
        topics: [],
        questions: [
            {
                label: "Last Stone Weight II - LeetCode",
                url: "https://leetcode.com/problems/last-stone-weight-ii/",
            },
            {
                label: "Last Stone Weight - LeetCode",
                url: "https://leetcode.com/problems/last-stone-weight/",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Target Sum - LeetCode",
                url: "https://leetcode.com/problems/target-sum/",
            },
            {
                label: "Combination Sum IV - LeetCode",
                url: "https://leetcode.com/problems/combination-sum-iv/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Coin Change 2 - LeetCode",
                url: "https://leetcode.com/problems/coin-change-2/",
            },
            {
                label: "Partition Array for Maximum Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-array-for-maximum-sum/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Partition Array into Disjoint Intervals - LeetCode",
                url: "https://leetcode.com/problems/partition-array-into-disjoint-intervals/",
            },
            {
                label: "Subset Sum Problem - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/subset-sum-problem/0",
            },
            {
                label: "Last Stone Weight II - HackerRank",
                url: "https://www.hackerrank.com/challenges/last-stone-weight-ii/problem",
            },
            {
                label: "Last Stone Weight II - Codeforces",
                url: "https://codeforces.com/problemset/problem/109/B",
            },
        ],
    },
    // Lecture 137
    {
        title: "Lecture 137",
        url: "https://www.youtube.com/watch?v=8HEjwf28LyE&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=147",
        videoEmbed: "https://www.youtube.com/embed/8HEjwf28LyE",
        topics: [],
        questions: [
            {
                label: "Partition Array for Maximum Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-array-for-maximum-sum/",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Target Sum - LeetCode",
                url: "https://leetcode.com/problems/target-sum/",
            },
            {
                label: "Combination Sum IV - LeetCode",
                url: "https://leetcode.com/problems/combination-sum-iv/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Coin Change 2 - LeetCode",
                url: "https://leetcode.com/problems/coin-change-2/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Partition Array into Disjoint Intervals - LeetCode",
                url: "https://leetcode.com/problems/partition-array-into-disjoint-intervals/",
            },
            {
                label: "Subset Sum Problem - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/subset-sum-problem/0",
            },
            {
                label: "Partition Array for Maximum Sum - HackerRank",
                url: "https://www.hackerrank.com/challenges/partition-array-for-maximum-sum/problem",
            },
            {
                label: "Partition Array for Maximum Sum - Codeforces",
                url: "https://codeforces.com/problemset/problem/109/C",
            },
            {
                label: "Partition Array for Maximum Sum - CodeChef",
                url: "https://www.codechef.com/problems/PARTITION",
            },
            {
                label: "Partition Array for Maximum Sum - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_x",
            },
        ],
    },
    // Lecture 138
    {
        title: "Lecture 138",
        url: "https://www.youtube.com/watch?v=x--bMzT1Xhk&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=147",
        videoEmbed: "https://www.youtube.com/embed/x--bMzT1Xhk",
        topics: [],
        questions: [
            {
                label: "Distinct Subsequences - LeetCode",
                url: "https://leetcode.com/problems/distinct-subsequences/",
            },
            {
                label: "Distinct Subsequences II - LeetCode",
                url: "https://leetcode.com/problems/distinct-subsequences-ii/",
            },
            {
                label: "Number of Subsequences That Satisfy the Given Sum Condition - LeetCode",
                url: "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/",
            },
            {
                label: "Longest Increasing Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Longest Common Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-common-subsequence/",
            },
            {
                label: "Longest Palindromic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-palindromic-subsequence/",
            },
            {
                label: "Arithmetic Subarrays - LeetCode",
                url: "https://leetcode.com/problems/arithmetic-subarrays/",
            },
            {
                label: "Longest Arithmetic Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence/",
            },
            {
                label: "Longest Arithmetic Subsequence of Given Difference - LeetCode",
                url: "https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/",
            },
            {
                label: "Subsequences with Given Sum - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/subsequences-with-given-sum/0",
            },
            {
                label: "Distinct Subsequences - HackerRank",
                url: "https://www.hackerrank.com/challenges/distinct-subsequences/problem",
            },
            {
                label: "Distinct Subsequences - Codeforces",
                url: "https://codeforces.com/problemset/problem/109/D",
            },
            {
                label: "Distinct Subsequences - CodeChef",
                url: "https://www.codechef.com/problems/DISTINCT",
            },
            {
                label: "Distinct Subsequences - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_z",
            },
        ],
    },
    // Lecture 139
    {
        title: "Lecture 139",
        url: "https://www.youtube.com/watch?v=OgovJ9CB0hI&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=148",
        videoEmbed: "https://www.youtube.com/embed/OgovJ9CB0hI",
        topics: [],
        questions: [
            {
                label: "Number of Dice Rolls with Target Sum - LeetCode",
                url: "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/",
            },
            {
                label: "Target Sum - LeetCode",
                url: "https://leetcode.com/problems/target-sum/",
            },
            {
                label: "Combination Sum IV - LeetCode",
                url: "https://leetcode.com/problems/combination-sum-iv/",
            },
            {
                label: "Coin Change - LeetCode",
                url: "https://leetcode.com/problems/coin-change/",
            },
            {
                label: "Coin Change 2 - LeetCode",
                url: "https://leetcode.com/problems/coin-change-2/",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Dice Roll Simulation - LeetCode",
                url: "https://leetcode.com/problems/dice-roll-simulation/",
            },
            {
                label: "Minimum Path Sum - HackerRank",
                url: "https://www.hackerrank.com/challenges/minimum-path-sum/problem",
            },
            {
                label: "Number of Dice Rolls - Codeforces",
                url: "https://codeforces.com/problemset/problem/1256/A",
            },
            {
                label: "Number of Dice Rolls - CodeChef",
                url: "https://www.codechef.com/problems/DICEROLLS",
            },
            {
                label: "Number of Dice Rolls - AtCoder",
                url: "https://atcoder.jp/contests/abc144/tasks/abc144_j",
            },
            {
                label: "Dice Rolls - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/dice-rolls/0",
            },
        ],
    },
    // Lecture 140
    {
        title: "Lecture 140",
        url: "https://www.youtube.com/watch?v=LDiD9fr28tc&list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&index=138",
        videoEmbed: "https://www.youtube.com/embed/LDiD9fr28tc",
        topics: [],
        questions: [
            {
                label: "Maximum Height by Stacking Cuboids - LeetCode",
                url: "https://leetcode.com/problems/maximum-height-by-stacking-cuboids/",
            },
            {
                label: "Russian Doll Envelopes - LeetCode",
                url: "https://leetcode.com/problems/russian-doll-envelopes/",
            },
            {
                label: "Longest Increasing Subsequence - LeetCode",
                url: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
            {
                label: "Tallest Billboard - LeetCode",
                url: "https://leetcode.com/problems/tallest-billboard/",
            },
            {
                label: "Box Stacking - GeeksforGeeks",
                url: "https://practice.geeksforgeeks.org/problems/box-stacking/1",
            },
            {
                label: "Partition Equal Subset Sum - LeetCode",
                url: "https://leetcode.com/problems/partition-equal-subset-sum/",
            },
            {
                label: "Minimum Path Sum - LeetCode",
                url: "https://leetcode.com/problems/minimum-path-sum/",
            },
            {
                label: "Maximum Subarray - LeetCode",
                url: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                label: "Burst Balloons - LeetCode",
                url: "https://leetcode.com/problems/burst-balloons/",
            },
            {
                label: "House Robber - LeetCode",
                url: "https://leetcode.com/problems/house-robber/",
            },
            {
                label: "House Robber II - LeetCode",
                url: "https://leetcode.com/problems/house-robber-ii/",
            },
            {
                label: "Cuboid Stacking - HackerRank",
                url: "https://www.hackerrank.com/challenges/cuboid-stacking/problem",
            },
            {
                label: "Cuboid Stacking - Codeforces",
                url: "https://codeforces.com/problemset/problem/1661/A",
            },
            {
                label: "Cuboid Stacking - CodeChef",
                url: "https://www.codechef.com/problems/CUBOIDSTACK",
            },
        ],
    }
);


const DSAProgress = () => {
    const [expandedLecture, setExpandedLecture] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const searchInputRef = useRef(null);

    // Initialize completedLectures from localStorage directly
    const [completedLectures, setCompletedLectures] = useState(() => {
        if (typeof window !== "undefined") { // Ensure window is defined
            const storedCompleted = localStorage.getItem("completedLectures");
            return storedCompleted ? JSON.parse(storedCompleted) : [];
        }
        return [];
    });

    // Save completed lectures to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== "undefined") { // Ensure window is defined
            localStorage.setItem("completedLectures", JSON.stringify(completedLectures));
        }
    }, [completedLectures]);

    // Handler to toggle lecture expansion
    const toggleLecture = (index) => {
        setExpandedLecture((prev) => (prev === index ? null : index));
    };

    // Handler to toggle lecture completion
    const toggleCompletion = (lectureTitle) => {
        setCompletedLectures((prev) =>
            prev.includes(lectureTitle)
                ? prev.filter((title) => title !== lectureTitle)
                : [...prev, lectureTitle]
        );
    };

    const [selectedTopic, setSelectedTopic] = useState("");
    const allTopics = Array.from(new Set(lectures.flatMap((lecture) => lecture.topics)));

    // Filter lectures based on search term and selected topic
    const filteredLectures = lectures.filter(
        (lecture) =>
            lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedTopic === "" || lecture.topics.includes(selectedTopic))
    );

    const totalLectures = lectures.length;
    const completedCount = completedLectures.length;
    const progress = Math.round((completedCount / totalLectures) * 100);

    

    return (
        <div className="dsa-progress-container">
            {/* Embedded CSS remains unchanged */}
            <style>{`
                /* Dark-mode-friendly root variables */
                :root {
                  --background-color: #121212;
                  --card-bg: #1e1e1e;
                  --border-color: #333;
                  --header-bg: #222;
                  --text-color: #ddd;
                  --accent-color: #0d81ff;
                  --accent-color-hover: #0a66cc;
                  --completed-text-color: #888;
                }
    
                /* Global body styling */
                body {
                  background-color: var(--background-color);
                  margin: 0;
                  font-family: Arial, sans-serif;
                }
    
                /* Container for the entire DSA Progress component */
                .dsa-progress-container {
                  max-width: 900px;
                  margin: 0 auto;
                  padding: 1rem;
                  color: var(--text-color);
                }
    
                /* Page Title */
                .dsa-title {
                  text-align: center;
                  font-size: 2rem;
                  margin-bottom: 2rem;
                }
    
                /* Search Bar */
                .search-container {
                  display: flex;
                  justify-content: center;
                  margin-bottom: 1.5rem;
                }
    
                .search-container input {
                  width: 300px;
                  padding: 0.5rem;
                  border: 1px solid var(--border-color);
                  border-radius: 4px 0 0 4px;
                  background-color: var(--card-bg);
                  color: var(--text-color);
                  outline: none;
                }
    
                /* Removed Search Button for real-time search */
    
                /* Progress Bar Container */
                .progress-bar-container {
                  background-color: var(--border-color);
                  border-radius: 4px;
                  margin: 1rem 0;
                  height: 25px;
                  overflow: hidden;
                }
    
                .progress-bar {
                  background-color: var(--accent-color);
                  height: 100%;
                  text-align: center;
                  color: #fff;
                  line-height: 25px;
                  transition: width 0.4s ease;
                }
    
                /* Lecture Cards */
                .dsa-lecture {
                  background-color: var(--card-bg);
                  margin-bottom: 1rem;
                  border: 1px solid var(--border-color);
                  border-radius: 6px;
                  overflow: hidden;
                  transition: transform 0.2s;
                }
    
                .dsa-lecture:hover {
                  transform: scale(1.01);
                }
    
                .dsa-lecture.completed {
                  opacity: 0.7;
                }
    
                .dsa-lecture-header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  cursor: pointer;
                  background-color: var(--header-bg);
                  padding: 0.75rem 1rem;
                  user-select: none;
                }
    
                .dsa-lecture-header h2 {
                  margin: 0;
                  font-size: 1.2rem;
                  color: var(--text-color);
                  display: flex;
                  align-items: center;
                }
    
                .dsa-lecture-header h2.completed {
                  color: var(--completed-text-color);
                  text-decoration: line-through;
                }
    
                .dsa-lecture-header span {
                  font-size: 1.5rem;
                  font-weight: bold;
                  color: var(--text-color);
                }
    
                .dsa-lecture-content {
                  padding: 1rem;
                  background-color: var(--card-bg);
                  animation: fadeIn 0.3s ease-in-out;
                }
    
                .lecture-video {
                  width: 100%;
                  height: 380px;
                  margin-bottom: 1rem;
                  border: none;
                  border-radius: 4px;
                }
    
                .dsa-lecture-content h3 {
                  margin-top: 1rem;
                  margin-bottom: 0.5rem;
                  font-size: 1.1rem;
                  color: var(--text-color);
                }
    
                .topics-list,
                .questions-list {
                  list-style: none;
                  padding-left: 0;
                  margin-bottom: 1rem;
                }
    
                .topics-list li,
                .questions-list li {
                  margin-bottom: 0.4rem;
                }
    
                .questions-list li a {
                  color: var(--accent-color);
                  text-decoration: none;
                }
    
                .questions-list li a:hover {
                  text-decoration: underline;
                }
    
                /* Additional Sections */
                .additional-section {
                  margin-top: 2rem;
                  padding: 1rem;
                  border: 1px solid var(--border-color);
                  border-radius: 6px;
                  background-color: var(--card-bg);
                }
    
                .additional-section h2 {
                  margin-top: 0;
                  color: var(--text-color);
                }
    
                .additional-section ul {
                  list-style: disc;
                  margin-left: 1.5rem;
                }
    
                .additional-section ul li {
                  margin-bottom: 0.3rem;
                }
    
                .additional-section ul li a {
                  color: var(--accent-color);
                  text-decoration: none;
                }
    
                .additional-section ul li a:hover {
                  text-decoration: underline;
                }
    
                /* Completed Lecture Checkbox */
                .completed-checkbox {
                  margin-right: 0.5rem;
                  transform: scale(1.2);
                  cursor: pointer;
                }
    
                /* Fade In Animation */
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                  }
                  to {
                    opacity: 1;
                  }
                }
    
                /* Responsive Design */
                @media (max-width: 768px) {
                  .lecture-video {
                    height: 250px;
                  }
    
                  .search-container input {
                    width: 200px;
                  }
                }
            `}</style>

            {/* Title */}
            <h1 className="dsa-title">DSA PROGRESS</h1>

            {/* Progress Bar */}
            <div className="progress-bar-container" aria-label="Progress Bar">
                <div
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    role="progressbar"
                >
                    {progress}%
                </div>
            </div>
            <p style={{ textAlign: "center" }}>
                {completedCount} out of {totalLectures} lectures completed
            </p>
    
            {/* Topic Filter */}
            <div className="topic-filter" style={{ marginBottom: "1rem" }}>
                <label htmlFor="topic-dropdown" style={{ marginRight: "1rem" }}>
                    Filter by Topic:
                </label>
                <select
                    id="topic-dropdown"
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                >
                    <option value="">All Topics</option>
                    {allTopics.map((topic, index) => (
                        <option key={index} value={topic}>
                            {topic}
                        </option>
                    ))}
                </select>
            </div>
    
            {/* Search Box */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search lectures..."
                    ref={searchInputRef}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search lectures"
                />
                {/* Removed Search Button for real-time search */}
            </div>
    
            {/* Filtered Lectures */}
            {filteredLectures.map((lecture, index) => (
                <div
                    key={index}
                    className={`dsa-lecture ${completedLectures.includes(lecture.title) ? "completed" : ""}`}
                >
                    <div
                        className={`dsa-lecture-header ${completedLectures.includes(lecture.title) ? "completed" : ""}`}
                        onClick={() => toggleLecture(index)}
                        aria-expanded={expandedLecture === index}
                    >
                        <h2>
                            <input
                                type="checkbox"
                                className="completed-checkbox"
                                checked={completedLectures.includes(lecture.title)}
                                onChange={(e) => {
                                    e.stopPropagation();
                                    toggleCompletion(lecture.title);
                                }}
                                aria-label={`Mark ${lecture.title} as completed`}
                            />
                            {lecture.title}
                        </h2>
                        <span>{expandedLecture === index ? "–" : "+"}</span>
                    </div>
    
                    {expandedLecture === index && (
                        <div className="dsa-lecture-content">
                            <iframe
                                src={lecture.videoEmbed}
                                title={lecture.title}
                                className="lecture-video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
    
                            {lecture.topics.length > 0 && <h3>Topics Covered:</h3>}
                            {lecture.topics.length > 0 && (
                                <ul className="topics-list">
                                    {lecture.topics.map((topic, idx) => (
                                        <li key={idx}>{topic}</li>
                                    ))}
                                </ul>
                            )}
    
                            {lecture.questions.length > 0 && <h3>LeetCode Questions:</h3>}
                            {lecture.questions.length > 0 && (
                                <ul className="questions-list">
                                    {lecture.questions.map((q, qIndex) => (
                                        <li key={qIndex}>
                                            <a href={q.url} target="_blank" rel="noopener noreferrer">
                                                {q.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            ))}
    
            {/* Additional Sections AFTER Lecture 59 */}
            <div className="additional-section">
                <h2>Additional Practice Questions</h2>
                <p>
                    <em>First do the lectures, then attempt these questions:</em>
                </p>
    
                {additionalSections.map((section, secIndex) => (
                    <div key={secIndex} style={{ marginBottom: "1.5rem" }}>
                        <h2>{section.sectionTitle}</h2>
                        <ul>
                            {section.questions.map((q, qIndex) => (
                                <li key={qIndex}>
                                    <a href={q.url} target="_blank" rel="noopener noreferrer">
                                        {q.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
    
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
                <strong>Section made by shayma7004</strong>
            </p>
        </div>
    );
};

export default DSAProgress;
