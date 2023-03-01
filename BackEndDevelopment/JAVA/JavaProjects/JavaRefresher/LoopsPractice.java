import java.util.Scanner;

//PATTERN ONE FUNCTION
/**
 * LoopsPractice
 */
public class LoopsPractice {
    Scanner myScanner = new Scanner(System.in);

    public void pattern1() {
        int k, l;
        System.out.println("-------PATTERN 1----------");
        for (k = 1; k < 6; k++) {
            for (l = 0; l < k; l++) {
                System.out.print("*" + ' ');

            }
            System.out.println('\n');
        }
    }

    public void pattern2() {
        System.out.println("-------PATTERN 2----------");
        int k, l;
        for (k = 6; k > 0; k--) {
            for (l = 0; l < k; l++) {
                System.out.print("*" + ' ');

            }
            System.out.println('\n');
        }
    }

    public void pattern3() {
        System.out.println("-------PATTERN 3----------");
        int i, j;
        for (i = 1; i < 6; i++) {

            for (j = 1; j < i + 1; j++) {
                System.out.print(j + " ");
            }
            System.out.println('\n');
        }
    }

    public void pattern4() {
        System.out.println("-------PATTERN 4----------");
        int m, n;
        for (m = 6; m > 1; m--) {
            for (n = 1; n < m; n++) {
                System.out.print(n + " ");
            }
            System.out.println('\n');
        }
    }

    public void pattern5() {
        System.out.println("-------PATTERN 5----------");
        int i, j;
        for (i = 5; i > 0; i--) {
            for (j = 1; j < i + 1; j++) {
                System.out.print(i * j + " ");
            }
            System.out.println('\n');

        }
    }

    public void Grader(int studentGrade) {
        if (studentGrade > 80 && studentGrade <= 100) {
            System.out.println("You have scored an A");
        } else if (studentGrade > 70 && studentGrade < 79) {
            System.out.println("You have scored an B");
        } else if (studentGrade > 60 && studentGrade < 69) {
            System.out.println("You have scored an C");
        } else if (studentGrade > 50 && studentGrade < 59) {
            System.out.println("You have scored an D");
        } else if (studentGrade < 49 && studentGrade > 0) {
            System.out.println("You have scored an E");
        } else {
            System.out.println("Invalid! Please enter a valid number");

        }
    }

    public void gradingSystem() {
        System.out.println("--------------GRADING SYSTEM--------------");

        System.out.println("Please enter your grade");
        int studentGrade = myScanner.nextInt();
        if (studentGrade >= 0) {
            Grader(studentGrade);
        } else {
            System.out.println("Please a valid grade");
            studentGrade = myScanner.nextInt();
            Grader(studentGrade);
        }
    }

    public void numbers() {
        System.out.println("------------------Numbers-------------------");
        for (int i = 0; i < 21; i++) {
            System.out.print(i + " ");
        }
        System.out.println('\n');
    }

    public void evenNumbers() {
        System.out.println("------------------Even numbers-------------------");
        for (int i = 0; i <= 20; i++) {
            if (i % 2 == 0) {
                System.out.print(i + " ");
            }
        }
        System.out.println('\n');
    }

    public void sumofIntegers() {
        System.out.println("------------------Sum of numbers-------------------");
        int sum = 0;
        for (int i = 0; i <= 20; i++) {
            sum += i;
            System.out.print(sum + " ");
        }
        System.out.println('\n');
    }

    public static void main(String[] args) {
        LoopsPractice lp1 = new LoopsPractice();
        lp1.numbers();
        lp1.evenNumbers();
        lp1.sumofIntegers();
        lp1.pattern1();
        lp1.pattern2();
        lp1.pattern3();
        lp1.pattern4();
        lp1.pattern5();
        lp1.gradingSystem();

    }

}