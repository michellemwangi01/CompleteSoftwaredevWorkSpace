import javax.swing.*;
import java.awt.*;

public class CalculatorInterface {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Calculator");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JPanel panel = new JPanel(new BorderLayout());

        JTextField input = new JTextField();
        input.setHorizontalAlignment(JTextField.RIGHT);
        panel.add(input, BorderLayout.NORTH);

        JPanel buttonPanel = new JPanel(new GridLayout(4, 3));

        String[] buttonLabels = { "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "#" };

        for (String label : buttonLabels) {
            JButton button = new JButton(label);
            buttonPanel.add(button);
        }

        panel.add(buttonPanel, BorderLayout.CENTER);

        frame.add(panel);
        frame.pack();
        frame.setVisible(true);
    }
}
