   M S B A M L   `   `   `  ����R  NHome Automation Desktop, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullA%clr-namespace:Home_Automation_DesktopHome_Automation_Desktop  5   	   (    "Home_Automation_Desktop.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   7local%clr-namespace:Home_Automation_Desktop     5   	     � Title$  Login��5   	   $	��600��6   $	��800��6$    � AllowsTransparency$
 True��60    � WindowStartupLocation$ CenterScreen=�5	   	    � WindowStyle$
 None=�5
   	   
�������.��5      ��  �� CornerRadius$ 20��6   ���#D6D6D6$��2q�65   ._�5   
   � $��
-2,8,-2,-8q�6   .+�5      �� $��Images/slider2.jpg��6   $
��Left=�60   $
��1046��6K   $	��606��6X   $	��Top=�6e   $��	0,-10,0,0q�6}   � 5      -   5         �Name$ LoadingOverlay��5      ���	#80000000$y�	Collapsed=�6B   .+�5      A� $	��100��6   $	��100��6&   
������ ���#065861$��10��6W   z�5      �� 5      -   5        LoadingSpinner�� �� CenterX$ 50Q�5   B    �� CenterY$ 50Q�6O   5      �� 5      $��
Loading...��6   
�������$��20(�6A   $
��Bold"�6O   $��Bottom=�6a   $��	0,120,0,0q�6|    �� TextAlignment$ Center=�6�   5      �� 5      -   5        $��Get Started��5      $��Center=�6+   $��82��6H   $��	0,480,0,0q�6T   $	��Top=�5      $	��254��6-   ���#065861���#F6F4F4$��35(�5      $
��Bold"�6#   	 � Cursor$
	 Hand��65   
���   �$��3q�6W   ��5       �� 5!      
 �� 
TargetType"
 ��6   .�5"      ��  �� Property � �� �� Value �#06586167   �� 5#       � �� �#F6F4F467   �� 5$       � ��$ 15,10q�64   �� 5%       � ��$ 35(�65   �� 5&       � ��$
 Bold"�67   �� 5'       � ��$ 5q�6<   �� 5(       �@�Cursor$
 Hand��63   �� 5)       � ��$	 254��62   �� 5*       � ��$ 82��63    �� Triggers 5+      P� 5,       P� Property �@J�IsMouseOver P� Value$
 True��6=   . �5-   "   ��  � �� �#E5F1ED6?   �� 5.   "    � �� �#0504046?   5/      51      53      54      55      56      