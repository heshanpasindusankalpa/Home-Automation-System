   M S B A M L   `   `   `  ����R  NHome Automation Desktop, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullA%clr-namespace:Home_Automation_DesktopHome_Automation_Desktop  5   	   (    "Home_Automation_Desktop.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   7local%clr-namespace:Home_Automation_Desktop     5   	     � Title$  Login��5   	   $	��620��6   $	��800��6$    � AllowsTransparency$
 True��60    � WindowStartupLocation$ CenterScreen=�5	   	    � WindowStyle$
 None=�5
   	   
���   �.��5      ��  �� CornerRadius$ 20��6   ���#D6D6D6$��2q�65   ._�5   
   � $��	-2,8,0,-8q�6   $
��Left=�6"   $	��800��6=    � ColumnDefinitions 5      �� 5      $
��201* �6#   �� 5      $
��599* �6#   .+�5      �� $��Images/home.jpg��6   $
��Left=�6-   $	��780��6H   $	��356��6T   $	��Top=�6a   $��2��6y    J� RenderTransformOrigin$ 0.326,0.495&�6�   $��10,0,0,0q�6�   � 5      -   5         �Name$ LoadingOverlay��5      ���	#80000000$y�	Collapsed=�6B   $��2��6Y   .+�5      A� $	��100��6   $	��100��6&   
������ 
��� ���$��10��6V   z�5      �� 5      -   5        LoadingSpinner�� �� CenterX$ 50Q�5   B   	 �� CenterY$	 50Q�6O   5      �� 5      $��
Loading...��6   
��� ���$��20(�6B   $
��Bold"�6P   $��Bottom=�6b   $��
0,120,0,10q�6}   
 �� TextAlignment$
 Center=�6�   5      �� 5       -   5        $��72,430,273,84q�5    5   $��1��6L   ��5!      �� 5"       �� 
TargetType" ��6   .�5#      ��  �� Property � �� �� Value �#F96E2A67   �� 5$       � ��
 �   �67   �� 5%       � ��$ 15,10q�64   �� 5&       � ��$ 35(�65   �� 5'       � ��$
 Bold"�67   �� 5(       � ��$ 5q�6<   �� 5)       �@�Cursor$
 Hand��63   �� 5*       � ��$	 254��62   �� 5+       � ��$ 82��63   �� 5,       � �� 5-      �� 5.   "    �� 
TargetType" ��62   .R�5/   &   �� #��z��6-   #��z��50   !   #��z��51   !   $ 10��52   !   ._�53   *   �� $��Center=�6;   $��Center=�54   /   55   '   56   #   58       �� Triggers 59      P� 5:       P� Property �@J�IsMouseOver P� Value$
 True��6=   . �5;   "   ��  � ��
 �   �6?   �� 5<   "    � �� �#eee6?   5=      5?      .��5A      �� $��Get Started��6   
���   �6/   5B      �� 5F      $
��Left=�6   $��101,298,0,0q�63   $
��Wrap=�6H   $&�� Welcome to Smart Home Automation��6\   $	��Top=�6�   $��75��6�   $	��649��6�   $ 0.331,0.425&�6�   $��35(�6�   $��2��6�   $
��Bold"�6�   
�������6  �� 5G      $��1��6   $
��Left=�6(   $��30��6C   $��
18,357,0,0q�6O   $
��Wrap=�6c   $9��3Control your home devices with ease and efficiency.��6w   $	��Top=�6�   $	��362��6�   $��20(�6�   
�������6�   5H      5I      5J      