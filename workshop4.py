class student:
    school_name="weschool"
    def __init__(self,name,grade):
        self.name=name
        self.grade=grade 
    def display(self):
        print(f"Name: {self.name}, Grade: {self.grade}, School: {self.school_name}")

student1 = student("Ahmed", "2nd")
student2 = student("Ali", "3rd")

student1.display()
student2.display()

