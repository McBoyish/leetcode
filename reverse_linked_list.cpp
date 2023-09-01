// Given the head of a singly linked list, reverse the list, and return the reversed list.

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    // iterative O(n)
    ListNode* reverseList1(ListNode* head) {
        ListNode* next = nullptr;
        ListNode* prev = nullptr;
        ListNode* current = head;
        while (current != nullptr) {
            next = current->next;
            current->next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }

    // recursion, O(n^2)
    ListNode* reverseList(ListNode* head) {
        if (head == nullptr) return nullptr;
        if (head->next == nullptr) return head;
        ListNode* reverse = reverseList(head->next);
        ListNode* x = reverse;
        while (true) {
            if (x->next == nullptr) {
                x->next = new ListNode(head->val);
                break;
            } else {
                x = x->next;
            }
        }
        return reverse;
    }
};