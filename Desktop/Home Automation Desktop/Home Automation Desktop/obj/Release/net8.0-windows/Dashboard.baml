   M S B A M L   `   `   `  ����   Home Automation Desktop'    !Home_Automation_Desktop.Dashboard   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml       � Title$  	Dashboard��$	��800��$
��1200��
���   � � 	Resources    NavButtonStyle �� 
TargetType �� Property �� Value �� 
TargetType ��Name �� CornerRadius �� Triggers	 P� Property
 P� Value  NavButtonTextStyle3  -System.Windows.Media.Effects.DropShadowEffect   Color   Opacity   ShadowDepth��%�  &	        &	 �    �� " ��.���  � �� �#DDDDDD��  � �� �#AAAAAA��  � ��$ 2q���  � ��$
 10,5q���  � ��$ Center=���  � ��$ Center=���  � �� �� " ��.R��� $ border��#��z��#��z��#��z��$ 8��._��� #��z��#��z��#��z�� P� 	 �@J�IsMouseOver$

 True��. ���  � �� �#CCCCCC��  � �� �#888888P� 	 � ��$

 True��. ���  � �� �#BBBBBB��  � �� �#666666�� " ��.���  � ��$ 20(���  � ��$
 Bold"���  � ��
 �   ���  �@��TextAlignment$ Center=���  �@J�Effect   $ White��$	 0.5Q�$ 2Q�.���  � ColumnDefinitions �� $
��120* ��� $
��331* ��� $
��149* �.+��� $��0�����#333333$	��200��$��20,10,20,10q�.+��� -   $��20,20,20,20q�#��[  .���� $��	Dashboard��#��[ �� -   $��20,20,20,20q�#��[  .���� $��Lights��#��[ �� -   $��20,20,20,20q�#��[  .���� $
��Fans��#��[ �� -   $��20,20,20,20q�#��[  .���� $��Cameras��#��[ �� -   $��20,20,20,20q�#��[  .���� $��Devices��#��[ �� -   $��20,20,20,20q�#��[  .���� $	��Add��#��[ � $��1��$��2��.+��� -    ��Name$ ContentSection��.���� -    ��Name$ widgetSection��$��20q�.+��� ���#444444 J� Opacity$	 0.9Q�$ 10�� �� Padding$ 20q�$��0,0,0,20q�._�� .+��� 
���   �$	��250��$
��Left=�$ 10��._��� 
���   �.+��� $��Current Weather��$��18(�$
��Bold"�
�������$��0,0,0,10q� J� Effect   $ Black��$	 0.8Q�$ 2Q��� -	    ��Name$ imgCurrentWeather��$	��100��$	��100��$��0,0,0,10q� �� BitmapScalingMode$ HighQuality=��� -
    ��Name$ txtTemperature��$��24(�
�������$��0,0,0,5q� �� TextAlignment$ Center=�   $ Black��$	 0.8Q�$ 1Q��� -   $ txtCondition��$��16(�
�������$ Center=�$��0,0,0,5q��� 
���   �$��298,10,349,10q�$ 10��._��� 
���   �$��10,10,350,10q�.+��� $��Humidity��$��16(�$
��Bold"�
�������$��10q��� -   $ txtHumidity��$��16(�
�������$ Center=����� *
Humidity+ �� StringFormat$ {0:0}%���� ���#444444$	 0.9Q�$ 10��$ 20q�$��0,0,0,10q�._��  �� $��* ��� $
��Auto �.+��� $��0�����#444444$	 0.9Q�$ 10��$ 5q�$��0,0,20,0q�._��� 
���   �$��Center=�$��	0,10,0,10q�$	��580��.+��� $��5-Day Forecast��$��18(�$
��Bold"�
�������$��0,0,0,10q�   $ Black��$	 0.8Q�$ 2Q��� -    ��Name$ forecastList������ .R���  �� Orientation$ 
Horizontal=�$��0,0,0,10q�.+��� $	��120��
����������� *Date+   $ Black���� $��50��$��50��$
��10,0q�$ HighQuality=����� *Icon+�� 
�������$
��10,0q�$��80������ *Temp+   $ Black���� 
�������$	��150��$
��Wrap=����� *Description+   $ Black���� $��1�����#444444$	 0.9Q�$ 10��$ 5q�._��� 
���   �$	��250��$ 10��._��� 
���   �.+��� $��Lighting��$��18(�$
��Bold"�
�������$��0,0,0,10q�   $ Black��$	 0.8Q�$ 2Q��� $	��104��$	��100��$ HighQuality=�$��/Images/baloonLight.png�� J� RenderTransformOrigin$ -0.157,0.57&��� $��24(�
�������$��0,0,0,5q�$��Content��$ Center=�   $ Black��$	 0.8Q�$ 1Q��� $��16(�
�������$��Additional Info��$ Center=��� -   $ txtLightPercentage��$��16(�$
��Bold"�
�������$��Right=�$��10q�&   System.Windows.Controls.DataGrid  -     Name$ 
deviceGrid��   AutoGenerateColumns$
 True��$y�	Collapsed=�$��10q����#333333
����������#666666   HorizontalGridLinesBrush �#666666   VerticalGridLinesBrush �#666666    HeadersVisibility$  Column=�!   RowBackground! �#444444"   AlternatingRowBackground" �#555555#   ColumnHeaderStyle# �� =  7System.Windows.Controls.Primitives.DataGridColumnHeader"  .���  � �� �#333333��  � ��
 �������  � �� �#666666$   	CellStyle$ �� *  $System.Windows.Controls.DataGridCell"  .���  � ��
 �������  � ��
 ���� 