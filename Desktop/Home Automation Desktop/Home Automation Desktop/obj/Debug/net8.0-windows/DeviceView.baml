   M S B A M L   `   `   `  ����R  NHome Automation Desktop, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullA%clr-namespace:Home_Automation_DesktopHome_Automation_Desktop  5   	   (    "Home_Automation_Desktop.DeviceView   5      W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   7local%clr-namespace:Home_Automation_Desktop     5   	   -   5        $	��450��5   	   $	��800��6   .��5
      � .+�5   
   �� $
��Auto=�6   $
��Auto=�6:   .��5      ��   �� Orientation$  Vertical=�6   .+�5      �� $��Devices��6   $��30(�6+   $
��Bold"�69   $��10,10,10,20q�6K   &   System.Windows.Controls.DataGrid  5      -   5          Name$ 
deviceGrid��5         AutoGenerateColumns$ False��6/   $	��300��6K      HeadersVisibility$ Column=�5         GridLinesVisibility$
 None=�66   $��14(�5      ���	#FFF0F0F0   RowBackground
 �����   AlternatingRowBackground �#F5F5F5   
IsReadOnly$
 True��5   >      Columns 5      0  *System.Windows.Controls.DataGridTextColumn  5      ,  &System.Windows.Controls.DataGridColumn	   Header$	 Device Name��6-   
   Width5  /System.Windows.Controls.DataGridLengthConverter$	
 200 6[      
FontWeight$ SemiBold"�6g   1  +System.Windows.Controls.DataGridBoundColumn   Binding 6B   �� *Name+   	CellStyle 5      �� 5   "    �� 
TargetType*  $System.Windows.Controls.DataGridCell"  6(   .�5   &   ��  �� Property � �� �� Value$ Center=�6S   �� 5   &    � ��$ Center=�6Q   5   #   5        5      $	 Status��6-   $	
 100 6X    6=   �� *Status+ 5      �� 5   "   "  6(   .�5   &   ��  � ��$ Center=�6S   �� 5   &    � ��$ Center=�6Q   5    #   5"        5#      $
	 Type��6-   $	
 150 6T    6;   �� *Type+ 5$      �� 5%   "   "  6(   .�5&   &   ��  � ��$ Center=�6S   �� 5'   &    � ��$ Center=�6Q   5(   #   5*        5+      $	 Location��6-   $	
 150 6Y    6?   �� *Place+ 5,      �� 5-   "   "  6(   .�5.   &   ��  � ��$ Center=�6S   �� 5/   &    � ��$ Center=�6Q   50   #   52         ColumnHeaderStyle 54      �� 55      =  7System.Windows.Controls.Primitives.DataGridColumnHeader"  6    .�56      ��  � ��
 � � �6;   �� 57       � ��
 �����6;   �� 58       � ��$
 Bold"�6;   �� 59       � ��$ 10q�68   �� 5:       � ��$ Center=�6K   5;         RowStyle 5=      �� 5>      )  #System.Windows.Controls.DataGridRow"  6    .�5?      ��  � ��$ 10q�68   �� 5@       � ��$ Center=�6I   5A      5C      5F      5G      5H      5I      