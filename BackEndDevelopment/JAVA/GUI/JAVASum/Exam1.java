import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class Exam1 extends JFrame implements ActionListener {
    JPanel panel;
    JLabel x, y, z, z1;
    JTextField a, b, c;
    JButton click;

    Exam1() {
        setLayout(new FlowLayout());
        setSize(600, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        panel = new JPanel();
        panel.setLayout(new GridLayout(2, 4));

        x = new JLabel("x value");
        panel.add(x);

        y = new JLabel("y value");
        panel.add(y);

        z = new JLabel("z value");
        panel.add(z);

        z = new JLabel("");
        panel.add(z);

        a = new JTextField(10);
        panel.add(a);

        b = new JTextField(10);
        panel.add(b);

        c = new JTextField(10);
        panel.add(c);

        click = new JButton("Sum values");
        click.addActionListener(this);
        panel.add(click);

        add(panel);

    }

    public void actionPerformed(ActionEvent ae) {
    }

    public static void main(String arg[]) {
        Exam1 gui = new Exam1();
        gui.setVisible(true);
    }
}
