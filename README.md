###  

##                                                       C# 程序设计规范

### 第一章	概述  

1.简介  

- 本规范为一套编写高效可靠的 C# 代码的标准、 约定和指南。 它以安全可靠的软件工程原则为基础，使代码易于理解、维护和增强，提高生产效率。同时，将带来更大的一致性， 使软件开发团队的效率明显提高      

2.适用范围 

- 本规范适用于公司所有的 C#源代码，为详细设计，代码编写和代码审核提供参考和依据    

3.文体规范

- 建议分为四种：要，建议，避免，不要，表示需要遵循的级别

4.术语定义

- Pascal(帕斯卡) 大小写将标识符的首字母和后面连接的每个单词的首字母都大写。可以对三字符或更多字符的标识符使用Pascal大小写。例如： BackColor

### 第二章	代码外观

2.1  列宽

- 代码列宽控制在210字符左右。(建议使用1280*1024分辨率显示屏)

2.2  换行  

当表达式超出或即将超出规定的列宽，遵循以下规则进行换行

- 在逗号后换行
- 在操作符前换行
- 规则1优先于规则2             

2.3  缩进   

- 缩进应该是每行一个Tab(4个空格)，不要在代码中使用Tab字符

2.4  空行 

空行是为了将逻辑上相关联的代码分块，以便提高代码的可阅读性，在代码中，不能包含多个空行        
在以下情况下使用一个空行  

- 方法与方法之间
- 属性与属性之间  
- 方法中变量声明与语句之间    
- 方法中不同的逻辑块之间   
- 方法中的返回语句与其他的语句之间   
- 属性与方法、属性与字段、方法与字段之间   
- 注释与它注释的语句间不空行，但与其他的语句间空一行   

2.5  空格

在以下情况中要使用到空格  

- 关键字和左括符 “(” 应该用空格隔开。如while (true)    

- 注意:在方法名和左括符 “(” 之间不要使用空格，这样有助于辨认代码中的方法调用与关键字

- 多个参数用逗号隔开，每个逗号后都应加一个空格

- 除了 . 之外，所有的二元操作符都应用空格与它们的操作数隔开。一元操作符、++及--与操作数间不需要空格。如

  ```c#
  a += c + d;  
  	a = (a + b) / (c * d);  
  	while (d++ = s++)  
  	{  
  		n++;  
  	}  
  	PrintSize(“size is “  +  size  +  “\n”);   
  ```


- 语句中的表达式之间用空格隔开。如

  ```c#
  	for (expr1;	expr2; expr3);
  ```

  ​	

2.6  括号 - ()      

- 左括号“(” 不要紧靠关键字，中间用一个空格隔开      

- 左括号“(”  与方法名之间不要添加任何空格       

- 没有必要的话不要在返回语句中使用()。如  

  ```c#
  if (condition);   
  	Array.Remove(1);   
  	return 1;     
  
  ```

2.7  花括号 - {}  

- 左花括号 “{” 放于关键字或方法名的下一行并与之对齐。如

  ```c#
  if (condition)   
  { }
  public int Add(int x, int y)    
  {
  
  }   
  ```

- 左花括号 “{” 要与相应的右花括号 “}”对齐    

- 通常情况下左花括号 “{”单独成行，不与任何语句并列一行   

- if、while、do语句后一定要使用{}，即使{}号中为空或只有一条语句。如

  ```C#
  if (somevalue == 1)      
  	{   
  		somevalue = 2;   
  }
  ```

- 右花括号 “}” 后建议加一个注释以便于方便的找到与之相应的 {。如

  ```c#
  while (1)  
  	{  
  		if (valid)  
  	  {   
        }  
        else
  	  {
  	
  	  } // if  
  } // while>       
  ```


​      


###  第三章	程序注释

#### 3.1	注释概述

1. 修改代码时，总是使代码周围的注释保持最新。
1. 在每个例程的开始，提供标准的注释样本以指示例程的用途、假设和限制很有帮助。注释样本应该是解释它为什么存在和可以做什么的简短介绍。
1. 避免在代码行的末尾添加注释；行尾注释使代码更难阅读。不过在批注变量声明时，行尾注释是合适的；在这种情况下，将所有行尾注释在公共制表位处对齐。
1. 避免杂乱的注释，如一整行星号，而是应该使用空白将注释同代码分开。
1. 避免在块注释的周围加上印刷框，这样看起来可能很漂亮，但是难于维护。
1. 在部署发布之前，移除所有临时或无关的注释，以避免在日后的维护工作中产生混乱。
1. 如果需要用注释来解释复杂的代码节，请检查此代码以确定是否应该重写它。尽一切可能不注释难以理解的代码，而应该重写它。尽管一般不应该为了使代码更简单以便于人们使用而牺牲性能，但必须保持性能和可维护性之间的平衡。
1. 在编写注释时使用完整的句子。注释应该阐明代码，而不应该增加多义性。
1. 在编写代码时就注释，因为以后很可能没有时间这样做。另外，如果有机会复查已编写的代码，在今天看来很明显的东西，幾周以后或许就不明显了。
1. 避免多余的或不适当的注释，如幽默的不主要的备注。
1. 使用注释来解释代码的意图，它们不应作为代码的联机翻译。
1. 注释代码中不十分明显的任何内容。
1. 为了防止问题反复出现，对错误修复和解决方法代码总是使用注释，尤其是在团队环境中。
1. 对由循环和逻辑分支组成的代码使用注释。这些是帮助源代码读者的主要方面。
1. 在整个应用程序中，使用具有一致的标点和结构的统一样式来构造注释。
1. 用空白将注释同注释分隔符分开。在没有颜色提示的情况下查看注释时，这样做会使注释很明显且容易被找到
1. 在所有的代码修改处加上修改标识的注释。
1. 为了是层次清晰，在闭合的右花括号后注释该闭合所对应的起点。  
1. 


```C#
	namespace Langchao.Procument.Web   
	{} // namespace Langchao.Procument.Web
```

####  3.2 文件注释

在每个文件头必须包含以下注释说明

```c#
// <copyright file="文件名.cs" company="Foxconn">   
// Copyright(c) foxconn All rights reserved    
// </copyright>    
// <author>×××</author>   
// <date> yyyy-mm-dd </date>    
// <summary>文件功能描述</summary>   
// <modify>    
//      修改人：×××   
//      修改时间：yyyy-mm-dd   
//      修改描述：×××    
//      版本：1.0   
//</modify>   
```

注意：

- 文件功能描述只需简述，具体详情在类的注释中描述。创建标识和修改标识由创建或修改人员的拼音或英文名。如：Zhangsan。一天内有多个修改的只需做一个在注释说明中做一个修改标识就够了，在所有的代码修改处加上修改标识的注释。

#### 3.3 文档型注释

-  该类注释采用.Net已定义好的Xml标签来标记，在声明接口、类、方法、属性、字段都应该使用该类注释，以便代码完成后直接生成代码文档，让别人更好的了解代码的实现和接口。如

#####   1.类、接口注释

```C#
/// <summary>   
/// 类功能的说明   
/// </summary> 
/// <remarks>   
/// 创建人：Zhangsan    
/// 创建日期：yyyy-mm-dd   
/// 修改人：Lisi   
/// 修改日期：yyyy-mm-dd   
/// 修改备注：无   
/// 版本：1.0   
/// <//remarks>

public class CountersModuleInitializer : ModuleInitializer   
{  
		
}
```

##### 2.方法、事件注释

```c#
/// <summary>  
/// 根据员工编号获得员工信息   
/// </summary>   
/// <param name="employeeId">员工编号</param>   
/// <param name="System.Exception">系统异常</param>   
/// <returns>员工姓名</returns>  
/// <remarks>  
/// 创建人：Zhangsan   
/// 创建日期：yyyy-mm-dd   
/// 修改人：Lisi   
/// 修改日期：yyyy-mm-dd   
/// 修改备注：无   
/// 版本：1.1   
/// </remarks>   

public string GetEmployeeNameById(int employeeId)  
 {  
	try  
	{  
   		  return "ddd"; 
	}   
	catch (System.Exception)   
	{   
		 throw;
	}  
}   
```

##### 3.属性、常量注释

```C#
/// <summary>
/// session id
/// </summary>
public const string SessionId = "";
```

3.1单行注释

- 该类注释用于方法内的代码注释。如变量的声明、代码或代码段的解释

  ```c#
  //注释语句
  private int Number; 
  ```

- 方法内变量的声明或花括号后的注释, 注释示例： 

  ```c#
  if ( 1 == 1)  // always true   
  	{   
  	   statement;    
  	}    
  	else  // always false   
  	{
          
      }
  ```

### 第四章 申明

4.1 每行声明数

- 一行只作一个声明,如

  ```c#
  int level;   //推荐  
  int size;    //推荐   
  int x, y;    //不推荐   
  ```

4.2 初始化  

- 建议在变量声明时就对其做初始化         

4.3 位置  

- 变量建议置于块的开始处，不要总是在第一次使用它们的地方做声明。如

  ```c#
  void MyMethod()    
  	{
           int int1 = 0;         // beginning of method block
  		if (condition)
  		{
  		  int int2 = 0;     // beginning of "if" block
  		  ...
  		}
  	}
  	不过也有一个例外
  	for (int i = 0; i < maxLoops; i++)  
  	{  
  		 ...  
  	}  
  ```

- 应避免不同层次间的变量重名，如

  ```c#
  int count;  
  	void MyMethod()   
  	{   
  		if (condition)   
  		{   
  			int count = 0;     // 避免...   
  		}   
  	}  
  ```

4.4 类和接口的声明   

- 在方法名与其后的左括号间没有任何空格

- 左花括号 “{” 出现在声明的下行并与之对齐，单独成行

- 方法间用一个空行隔开

  ```c#
    public class TESET
  	{
  	   public string a(String A, String B)
  	  {
  	        return "ok";
    } 
       
        public string b(String A, String B)
       {
          return "ok";
       }
  }
  ```

4.5 字段的声明


- 不要使用是 public 或 protected 的实例字段。如果避免将字段直接公开给开发人员，可以更轻松地对类进行版本控制，原因是在维护二进制兼容性时字段不能被更改为属性。考虑为字段提供 get 和set 属性访问器，而不是使它们成为公共的。 get 和 set 属性访问器中可执行代码的存在使得可以进行后续改进，如在使用属性或者得到属性更改通知时根据需要创建对象。  
  下面的代码示例阐释带有get 和 set 属性访问器的私有实例字段的正确使用。 示例：   

  ```c#
  public class Control   
  {  
  	private int handle;   
  	public  int Handle   
  	 {   
   		 get   
      	 {  
      		 return handle; 
      	 }   
   	 }   
  }
  ```

### 第五章	命名规范

####  5.1 命名概述


- 名称应该说明“什么”而不是“如何”。通过避免使用公开基础实现（它们会发生改变）的名称，可以保留简化复杂性的抽象层。例如，可以使用 GetNextStudent()，而不是 GetNextArrayElement()。 

命名原则是：

- 要使用可以准确说明变量/字段/类的完整的英文描述符， 如 FirstName。 对一些作用显而易见的变量可以采用简单的命名，如在循环里的递增（减）变量就可以被命名为” i ”。 要尽量采用项目所涉及领域的术语。 要采用大小写混合，提高名字的可读性。为区分一个标识符中的多个单词，把标识符中的每个单词的首字母大写。

以下几点是推荐的命名方法。

1. 避免容易被主观解释的难懂的名称，如方法名 AnalyzeThis()，或者属性名 xxK8,这样的名称会导致多义性。
1. 在类属性的名称中包含类名是多余的，如 Book.BookTitle。而是应该使用 Book.Title。
1. 只要合适，在变量名的末尾或开头加计算限定符（Avg、Sum、Min、Max、Index)。
1. 在变量名中使用互补对，如 Min/Max、Begin/End 和 Open/Close。
1. 布尔变量名应该包含 Is，这意味着 Yes/No 或 True/False 值，如 fileIsFound。
1. 即使对于可能仅出现在几个代码行中的生存期很短的变量，仍然使用有意义的名称。仅对于短循环索引使用单字母变量名，如 i 或 j。 可能的情况下，尽量不要使用原义数字或原义字符串，如For i = 1 To 7。而是使用命名常数，如 For i = 1 To NUM_DAYS_IN_WEEK 以便于维护和理解。
1. 用于事件处理的委托添加“EventHandler”后缀。
1. 用于事件处理之外的那些委托添加“Callback”后缀。
1. 不要给委托添加“Delegate”后缀。
1. 用名词或名词词组来给类型命名，在少数情况下也可以用形容词词组来给类型命名。
1. 用动词或动词词组来命名方法。
1. 用名词、名词词组或形容词来命名属性。
1. 要用动词或动词短语来命名事件。
1. 要用名词或名词短语来命名字段。

大小写规则

- 大写标识符中的所有字母都大写。仅对于由两个或者更少字母组成的标识符使用该约定。例如：

  System.IO
  System.Web.UI

- 下表汇总了大写规则，并提供了不同类型的标识符的示例

- 

名字空间

```c#
Pascal   
namespace System.Security { … }
```

类型 

```c#
Pascal   
public class StreamReader { … }
```

接口

```c#
Pascal   
public interface IEnumerable { … }
```

方法

```c#
Pascal   
public class Object {   
public virtual string ToString();
}
```

属性

```c#
Pascal  
public class String {   
public int Length { get; }   
}  
```

事件

```c#
Pascal   
public class Process{   
public event EventHandler Exited;   
}
```

字段

```c#
Pascal
public static readonly string UserId;
```

枚举

```c#
Pascal 
enum FileMode { Append, … }
```

参数

```c#
Pascal 
public class Convert {
public static int ToInt32(string userId);
}
```

####  5.2 缩写  

为了避免混淆和保证跨语言交互操作，请遵循有关区缩写的使用的下列规则： 

- 不要将缩写或缩略形式用作标识符名称的组成部分。例如，使用 GetWindow，而不要使用 GetWin 
- 不要使用计算机领域中未被普遍接受的缩写
- 在适当的时候，使用众所周知的缩写替换冗长的词组名称。例如，用 UI 作为 User Interface 缩寫

#### 5.3 类

以下规则概述類的命名指南:

- 使用 Pascal 大小写

- 用名词或名词短语命名類

- 使用全称避免缩写，除非缩写已是一种公认的约定，如URL、HTML    

- 不要使用类型前缀，如在类名称上对类使用 C 前缀。例如，使用类名称 FileStream，而不是 CFileStream

- 不要使用下划线字符 (_)

- 有时候需要提供以字母 I 开始的类名称，虽然该类不是接口。只要 I 是作为类名称组成部分的整个单词的第一个字母，这便是适当的。例如，类名称 IdentityStore 是适当的。在适当的地方，使用复合单词命名派生的类。派生类名称的第二个部分应当是基类的名称。例如，ApplicationException 对于从名为 Exception 的类派生的类是适当的名称，原因ApplicationException 是一种Exception。请在应用该规则时进行合理的判断。例如，Button 对于从 Control 派生的类是适当的名称。尽管按钮是一种控件，但是将 Control 作为类名称的一部分将使名称不必要的加长

  ```txt
  public class FileStream  
  public class Button  
  public class String  
  ```

#### 5.4 接口

以下规则概述接口的命名指南:

- 用名词或名词短语，或者描述行为的形容词命名接口。例如，接口名称 IComponent 使用描述性名词。接口名称 ICustomAttributeProvider 使用名词短语。名称 IPersistable 使用形容词

- 使用 Pascal 大小写 

- 少用缩写

- 给接口名称加上字母 I 前缀，以指示该类型为接口。在定义类/接口对（其中类是接口的标准实现）时使用相似的名称。两个名称的区别应该只是接口名称上有字母 I 前缀 

- 不要使用下划线字符 (_)

- 当类是接口的标准执行时，定义这一对类/接口组合就要使用相似的名称。两个名称的不同之处 只是接口名前有一个I前缀，以下是正确命名的接口的示例：

  ```c#
  public interface IServiceProvider  
  public interface IFormatable
  ```

以下代码示例阐释如何定义 IComponent 接口及其标准实现 Component 类  

```c#
 public interface IComponent    
 {  
	 // Implementation code goes here.  
 }
 public class Component: IComponent    
 {   
	 // Implementation code goes here.   
 }   
```

#### 5.5 枚举 (Enum)

枚举 (Enum) 值类型从 Enum 类继承，以下规则概述枚举的命名指南：

- 对于 Enum 类型和值名称使用 Pascal 大小写 
- 少用缩写。 
- 不要在 Enum 类型名称上使用 Enum 后缀 
- 对大多数 Enum 类型使用单数名称，但是对作为位域的 Enum 类型使用复数名称
- 总是将 FlagsAttribute 添加到位域 Enum 类型 
- 不要命名“Reserved”枚举值

#### 5.6 参数

以下规则概述参数的命名指南： 

- 使用描述性参数名称。参数名称应当具有足够的描述性，以便参数的名称及其类型可用于在大多数情况下确定它的含义。 

- 对参数名称使用Pascal大小写。 

- 使用描述参数的含义的名称，而不要使用描述参数的类型的名称。开发工具将提供有关参数的类型的有意义的信息。因此， 通过描述意义，可以更好地使用参数的名称。少用基于类型的参数名称，仅在适合使用它们的地方使用它们

- 不要使用保留的参数。保留的参数是专用参数，如果需要，可以在未来的版本中公开它们。相反，如果在类库的未来版本中需要更多的数据，请为方法添加新的重载 

- 不要给参数名称加匈牙利语类型表示法的前缀   
  以下是正确命名的参数的示例

  ```c#
  Type GetType(string TypeName)  
  string Format(string Format, Args() As object)  
  ```

#### 5.7 方法

以下规则概述方法的命名指南： 

- 使用动词或动词短语命名方法

- 使用Pascal大小写

- 以下是正确命名的方法的实例

  ```c#
  RemoveAll()  
  GetCharArray()  
  Invoke()
  ```

#### 5.8    属性 (property)

以下规则概述属性的命名指南： 

- 使用名词或名词短语命名属性 
- 使用Pascal大小写
- 不要使用匈牙利语表示法

考虑用与属性的基础类型相同的名称创建属性。例如，如果声明名为 Color 的属性，则属性的类型同样应该是 Color。请参阅本主题中后面的示例。 

以下代码示例阐释正确的属性命名。

```C#
public class SampleClass
{   
	public Color BackColor   
	{   
		// Code for Get and Set accessors goes here.   
	}
}  
```

以下代码示例阐释提供其名称与类型相同的属性。

```c#
public enum Color 
{  
	// Insert code for Enum here.
}  
public class Control  
{
	public Color Color   
	{   
		get  
		{  
			// Insert code here.  
		}   
		set
		{	
			// Insert code here.	
		}   
	}  
}    
```

以下代码示例不正确，原因是 Color 属性是 Int 类型的。

```c#
public enum Color
{  
	// Insert code for Enum here.   
}  
public class Control    
{
	public int Color    
	{       
		// Insert code here   
	}     
}     
```

在不正确的示例中，不可能引用 Color 枚举的成员。Color.Xxx 将被解释为访问一个成员，该成员首先获取 Color 属性（ C# 中为 int 类型）的值，然后再访问该值的某个成员（该成员必须是 System.Int32 的实例成员）。

#### 5.9事件

以下规则概述事件的命名指南： 

- 对事件处理程序名称使用 EventHandler 后缀。 
- 指定两个名为 sender 和 e 的参数。sender 参数表示引发事件的对象。sender 参始终是object 类型的，即使在可以使用更为特定的类型时也如此。与事件相关联的状态封装在名为 e 的事件类的实例中。对 e 参数类型使用适当而特定的事件类。 
- 用 EventArgs 后缀命名事件参数类。 
- 考虑用动词命名事件。 
- 使用动名词（动词的“ing”形式）创建表示事件前的概念的事件名称，用过去式表示事件后。例如，可以取消的 Close 事件应当具有 Closing 事件和 Closed 事件。不要使用BeforeXxx/AfterXxx 命名模式。 
- 不要在类型的事件声明上使用前缀或者后缀。例如，使用 Close，而不要使用 OnClose。 
- 通常情况下，对于可以在派生类中重写的事件，应在类型上提供一个受保护的方法（称为OnXxx）。此方法只应具有事件参数 e，因为发送方总是类型的实例。 

以下示例阐释具有适当名称和参数的事件处理程序。

```c#
public delegate void MouseEventHandler(object sender, MouseEventArgs e);
```

以下示例阐释正确命名的事件参数类。

```c#
public class MouseEventArgs : EventArgs   
{  
	int x;  
	int y;  
	public MouseEventArgs(int x, int y)   
	{  
		this.x = x;  
		this.y = y;   
	}
	public int X   
	{  
		get  
		{  
			return x;  
		}  
  	}   
	public int Y   
	{  
		get  
		{  
			return y;  
		}   
	}   
}   
```

#### 5.10	常量 (const)

以下规则概述常量的命名指南：   

- 所有单词大写，多个单词之间用 "_" 隔开。 如  

  ``` C#
  public const string PAGE_TITLE = "Welcome";  
  ```

#### 5.11	字段

以下规则概述字段的命名指南： 

- private、protected 使用Pasca大小写

- public 使用 Pascal 大小写

- 拼写出字段名称中使用的所有单词。仅在开发人员一般都能理解时使用缩写。字段名称不

- 要使用大写字母。下面是正确命名的字段的示例。 

  ```c#
  class SampleClass   
  	{  
  		string url;  
  		string destinationUrl;  
  	} 
  ```

  

- 不要对字段名使用匈牙利语表示法。好的名称描述语义，而非类型

- 不要对字段名或静态字段名应用前缀。具体说来，不要对字段名称应用前缀来区分静态和非静态字段。例如，应用 g_ 或 s_ 前缀是不正确的。 

- 对预定义对象实例使用公共静态只读字段。如果存在对象的预定义实例，则将它们声明为

- 对象本身的公共静态只读字段。使用 Pascal 大小写，原因是字段是公共的。下面的代码

示例阐释公共静态只读字段的正确使用。

```c#
public struct Color
{  
	public static readonly Color Red = new Color(0x0000FF);  
	public Color(int rgb)
	{
		 // Insert code here.}
	public Color(byte r, byte g, byte b)
	{  
		// Insert code here.  
	}  
	public byte RedValue   
	{  
		  get  
		  {  
	 		  return Color;  
		  }  
	}  
}  
```

#### 5.12 静态字段

 以下规则概述静态字段的命名指南：  

- 使用名词、名词短语或者名词的缩写命名静态字段
- 使用Pascal大小写
- 对静态字段名称使用匈牙利语表示法前缀
- 建议尽可能使用静态属性而不是公共静态字段

#### 5.13 集合

- 集合是一组组合在一起的类似的类型化对象，如哈希表、查询、堆栈、字典和列表，集合的命名建议用复数

#### 5.14措词

- 避免使用与常用的 .NET 框架命名空间重复的类名称。例如，不要将以下任何名称用作类名称：System、Collections、Forms 或 UI。有关 .NET 框架命名空间的列表，请参阅类库。
  另外，避免使用和以下关键字冲突的标识符

| abstract | as       | base     | bool     | break     | byte     | case   | catch      | char      | checked   |
| -------- | -------- | -------- | -------- | --------- | -------- | ------ | ---------- | --------- | --------- |
| const    | class    | continue | decimal  | default   | delegate | do     | double     | else      | enum      |
| event    | explicit | extern   | False    | finally   | static   | float  | for        | foreach   | goto      |
| if       | implicit | in       | int      | interface | internal | is     | lock       | long      | namespace |
| new      | null     | object   | operator | out       | override | params | private    | protected | public    |
| readonly | ref      | return   | sbyte    | sealed    | short    | sizeof | stackalloc | static    | string    |
| struct   | switch   | this     | throw    | True      | try      | typeof | uint       | ulong     | unchecked |
| ushort   | using    | virtual  | void     | volatile  | while    |        |            |           |           |

----

### 第六章	语句

#### 6.1 每行一个语句

每行最多包含一个语句。如

	a++;       //推荐  
	b--;       //推荐  
	a++; b--;  //不推荐  

#### 6.2 复合语句

复合语句是指包含"父语句{子语句;子语句;}"的语句，使用复合语句应遵循以下几点

- 子语句要缩进

- 左花括号“{” 在复合语句父语句的下一行并与之对齐，单独成行
  即使只有一条子语句要不要省略花括号“ {}”, 如

  ```C#
  while  (d + =  s++)  
  {  
     n++;  
  }  
  ```

#### 6.3  return 语句

```c#
return语句中不使用括号，除非它能使返回值更加清晰。如  
return;  
return myDisk.size();   
return (size ? size : defaultSize);   
```

#### 6.4  if、 if-else、if else-if 语句 

```c#
if、 if-else、if else-if 语句使用格式   
if (condition)  
{  
    statements;  
}  
if (condition)    
{    
   statements;  
}  
else        
{   
    statements;  
}  
if (condition)  
{      
   statements;  
}   
else if (condition)  
{      
    statements;   
}   
else    
{      
   statements;   
}
```

#### 6.5  for、foreach 语句

```c#
//for 语句使用格式  
for (initialization; condition; update)  
{  
 	statements;  
}  
//空的 for 语句（所有的操作都在initialization、condition 或 update中实现）使用格式

for (initialization; condition; update);    // update user id  

//foreach 语句使用格式
foreach (object obj in array)
{
   statements;
}
```

注意 1在循环过程中不要修改循环计数器。
2对每个空循环体给出确认性注释。

#### 6.6  while 语句

```c#
while 语句使用格式
while (condition)
{
	statements;
}

空的 while 语句使用格式
while (condition);
```

#### 6.7  do - while 语句

```C#
do - while 语句使用格式
do  
{  
  	statements;  
} while (condition);            
```

#### 6.8  switch - case 语句

```C#
switch - case  语句使用格式
switch (condition)
{
case 1:
       statements;
       break;
case 2:
       statements;
       break;
default:
       statements;
       break;
}
```

注意：

- 语句switch中的每个case各占一行
- 语句switch中的case按字母顺序排列
- 为所有switch语句提供default分支
- 所有的非空 case 语句必须用 break; 语句结束

#### 6.9  try - catch 语句    

```C#
try - catch  语句使用格式
try  
{  
   statements;  
}  
catch (ExceptionClass e)   
{   
   statements;   
}   
finally   
{   
   statements;   
}   
```

####  6.10  using 块语句   

```C#
using 块语句使用格式   
using (object)   
{  
   statements;   
}  
```

#### 6.11  goto 语句      

	goto 语句使用格式
	goto Label1:  
	statements;  
	Lable1:  
	statements;  



 

   

   











































































