   M S B A M L   `   `   `  ����   Home Automation Desktop'    !Home_Automation_Desktop.AddWindow   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml       � Title$  Add New Device��$	��800��$
��1200�� � WindowStartupLocation$ CenterScreen=����#212529 � AllowsTransparency$
 True�� � WindowStyle$
 None=�.��� .+��� ���#212529 �� CornerRadius$ 0��._��  � ColumnDefinitions �� $��* ��� $��3* � � RowDefinitions �� $��60 ��� $��* �.+��� ���#556A7F$ 	20,20,0,0��$��0��$��2��._�]� $
��True��.+��� $��Add New Device��$��20(�$
��Bold"�
�������$��Center=�$��10q��� -   $��X��$��30��$��30��
������ 
�������
������ $
��Bold"�$��Right=��� $��1��$��0��$��20q�$	��Top=�.+��� $��Component ID��
�������$��5q��� -    ��Name$ ComponentIdTextbox�����#3E454D
�������$��5q�$��25��$	��248���� $
��Name��
�������$��5q��� -   $ NameTextbox�����#3E454D
�������$��5q�$��23��$	��254���� $
��Type��
�������$��5q��� -    ��Name$ TypeComboBox�����#3E454D
���   �$��5q�$��24��$	��254��.@��� $��light���� $	��fan���� $��camera���� $��Place��
�������$��5q��� -   $ PlaceTextbox�����#3E454D
�������$��5q�$��23��$	��254���� $��Status��
�������$��5q��� -   $ StatusComboBox�����#3E454D
���   �$��5q�$��30��$	��254��.@��� $��On���� $	��Off���� -   $
��Save��$��5q�$��24��$	��253�����#F96E2A�� $��1��$��1��$��20q����#3E454D$ 10��._�&   System.Windows.Controls.DataGrid  -   	  Name$	 addWindowComponentTable��
   AutoGenerateColumns$
 False�����#3E454D
���   �   Columns 0  *System.Windows.Controls.DataGridTextColumn  ,  &System.Windows.Controls.DataGridColumn   Header$ Component ID��   Width5  /System.Windows.Controls.DataGridLengthConverter$ * 1  +System.Windows.Controls.DataGridBoundColumn   Binding �� *ComponentId+  $
 Name��$ *  �� *Name+  $
 Type��$ *  �� *Type+  $ Place��$ *  �� *Place+  $ Status��$ *  �� *Status+4  .System.Windows.Controls.DataGridTemplateColumn  $ Actions��$ *    CellTemplate �� .R���  �� Orientation$ 
Horizontal=�.+��� -	   $
��Edit��$��5q����#eee���#272932�� -
   $��Delete��$��5q����#F96E2A���#F1F2EB