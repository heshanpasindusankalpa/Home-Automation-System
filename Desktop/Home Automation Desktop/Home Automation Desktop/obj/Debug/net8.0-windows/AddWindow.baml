   M S B A M L   `   `   `  ����  Home Automation Desktop'    !Home_Automation_Desktop.AddWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Add New Device��5   	   $	��800��6    $
��1200��6-    � WindowStartupLocation$ CenterScreen=�5   	   ���#212529 � AllowsTransparency$
 True��5   	    � WindowStyle$
 None=�6#   .��5      � .+�5   
   �� ���#212529 �� CornerRadius$ 0��6&   ._�5	      �  � ColumnDefinitions 5
      �� 5      $��* �6'   �� 5      $��3* �6'    � RowDefinitions 5      �� 5      $��60 �6$   �� 5      $��* �6$   .+�5      �� 
���   �$ 	20,20,0,0��6,   $��0��6E   $��2��6R   ._�5      ]� $
��True��6    .+�5      �� $��Add New Device��6$   $��20(�6:   $
��Bold"�6H   
�������$��Center=�5   7   $��10q�6R   �� 5      -   5        $��X��5   !   $��30��6-   $��30��68   
������ 
�������
������ $
��Bold"�5   N   $��Right=�5   ;   5      5      �� 5      $��1��6   $��0��6*   $��20q�6:   $	��Top=�6F   .+�5       �� $��Component ID��6    
�������$��5q�6G   �� 5!      -   5         ��Name$ ComponentIdTextbox��5!      ���#3E454D
�������$��5q�6b   $��25��6m   $	��248��6y   �� 5#      $
��Name��6    
�������$��5q�6?   �� 5$      -   5        $ NameTextbox��5$      ���#3E454D
�������$��5q�6[   $��23��6f   $	��254��6r   �� 5&      $
��Type��6    
�������$��5q�6?   �� 5'      -   5         ��Name$ TypeComboBox��5'      ���#3E454D
���   �$��5q�6]   $��24��6h   $	��254��6t   .@�5(      �� $��light��6'   �� 5)      $	��fan��6'   �� 5*      $��camera��6'   5+      �� 5.      $��Place��6    
�������$��5q�6@   �� 5/      -   5        $ PlaceTextbox��5/      ���#3E454D
�������$��5q�6\   $��23��6g   $	��254��6s   �� 51      $��Status��6    
�������$��5q�6A   �� 52      -   5        $ StatusComboBox��52      ���#3E454D
���   �$��5q�6_   $��30��6j   $	��254��6v   .@�53      �� $��On��6'   �� 54      $	��Off��6'   55      �� 57      -   5        $
��Save��57      $��5q�6E   $��24��6P   $	��253��6\   ���#F96E2A6h   58      �� 5<      $��1��6   $��1��6&   $��20q�66   
���   �$ 10��6U   ._�5=      &   System.Windows.Controls.DataGrid  -   5        	  Name$	 addWindowComponentTable��5=      
   AutoGenerateColumns$
 False��6@   
���   �
���   �   Columns 5>      0  *System.Windows.Controls.DataGridTextColumn  5?      ,  &System.Windows.Controls.DataGridColumn   Header$ Component ID��61      Width5  /System.Windows.Controls.DataGridLengthConverter$ * 6g   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6G   �� *ComponentId+6g     5@      $
 Name��61   $ * 6X    6?   �� *Name+6X     5A      $
 Type��61   $ * 6X    6?   �� *Type+6X     5B      $ Place��61   $ * 6Z    6@   �� *Place+6Z     5D      $ Status��61   $ * 6\    6A   �� *Status+6\   4  .System.Windows.Controls.DataGridTemplateColumn  5E      $ Actions��65   $ * 6F      CellTemplate 5F   "   �� 5G   &   .R�5H   *   ��  �� Orientation$ 
Horizontal=�65   .+�5I   .   �� -	   5        $
��Edit��5I   5   $��5q�6]   ���#eee���#2729326z   �� 5J   .   -
   5        $��Delete��5J   5   $��5q�6a   ���#F96E2A���#F1F2EB6�   5K   +   5L   '   5N      5Q      5R      5S      5T      5U      5V      