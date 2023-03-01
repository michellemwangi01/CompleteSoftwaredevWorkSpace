import javax.swing.*;
import java.awt.*;

public class mainFrame extends JFrame {
    public mainFrame() {
        JFrame mainFrame = new JFrame("Number Calculation Program");
        mainFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        mainFrame.setSize(500, 400);

        JMenuBar mbar = new JMenuBar();
        JMenu m1 = new JMenu("File");
        JMenu m2 = new JMenu("Edit");
        JMenuItem mItem1 = new JMenuItem("Save");
        JMenuItem mItem2 = new JMenuItem("Save As");
        JMenuItem mItem3 = new JMenuItem("Undo");
        JMenuItem mItem4 = new JMenuItem("Redo");

        mbar.add(m1);
        mbar.add(m2);
        m1.add(mItem1);
        m1.add(mItem2);
        m2.add(mItem3);
        m2.add(mItem4);

        JPanel panel = new JPanel();
        JLabel label = new JLabel("Enter two numbers:");
        JTextField textField = new JTextField(10);
        JLabel labelOperator = new JLabel("+");
        JTextField textField2 = new JTextField(10);
        JLabel resultLabel = new JLabel("result");
        JTextField resultTextField = new JTextField(10);
        JButton addButton = new JButton("Add");

        panel.add(label);
        panel.add(textField);
        panel.add(labelOperator);
        panel.add(textField2);
        panel.add(addButton);
        panel.add(resultLabel);
        panel.add(resultTextField);

        mainFrame.getContentPane().add(BorderLayout.CENTER, panel);
        mainFrame.getContentPane().add(BorderLayout.NORTH, mbar);
        mainFrame.setVisible(true);
    }
}
