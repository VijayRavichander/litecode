import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const sample_data = [
        {
          "problem_name": "Two Sum",
          "difficulty": "Easy",
          "acceptance_rate": "45.8%"
        },
        {
          "problem_name": "Median of Two Sorted Arrays",
          "difficulty": "Hard",
          "acceptance_rate": "29.6%"
        },
        {
          "problem_name": "Longest Substring Without Repeating Characters",
          "difficulty": "Medium",
          "acceptance_rate": "33.4%"
        },
        {
          "problem_name": "Valid Parentheses",
          "difficulty": "Easy",
          "acceptance_rate": "39.2%"
        },
        {
          "problem_name": "Merge k Sorted Lists",
          "difficulty": "Hard",
          "acceptance_rate": "27.8%"
        },
        {
          "problem_name": "Climbing Stairs",
          "difficulty": "Easy",
          "acceptance_rate": "47.9%"
        },
        {
          "problem_name": "Maximum Subarray",
          "difficulty": "Easy",
          "acceptance_rate": "43.2%"
        },
        {
          "problem_name": "Best Time to Buy and Sell Stock",
          "difficulty": "Easy",
          "acceptance_rate": "51.6%"
        },
        {
          "problem_name": "Longest Palindromic Substring",
          "difficulty": "Medium",
          "acceptance_rate": "30.1%"
        },
        {
          "problem_name": "Word Break",
          "difficulty": "Medium",
          "acceptance_rate": "35.3%"
        }
      ]
      
    return NextResponse.json(
        {
            data: sample_data
        }, 
        {
            status: 200,
        }
    )
}