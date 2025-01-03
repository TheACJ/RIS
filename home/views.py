from django.shortcuts import render, redirect
from django.conf import settings
from django.conf import settings
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages
import csv
from .forms import ContactForm, BlogPostForm
from .models import BlogPost, Contact    # Import your BlogPost model

# def index(request):
        
#     return render(request, 'home/index.html')


def index(request):
    # Retrieve recent blog posts from the database
    recent_posts = BlogPost.objects.order_by('-date_published')[:3]
    
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():

            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']

            form.save()

            try:
                # Send email code here
                messages.success(request, 'Your message has been sent successfully!')
            except Exception as e:
                messages.error(request, f'Error sending email: {str(e)}')

                # Write form data to CSV
                with open('responses.csv', 'a', newline='') as csvfile:
                    fieldnames = ['Name', 'Email', 'Subject', 'Message']
                    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
                    writer.writerow({'Name': name, 'Email': email, 'Subject': subject, 'Message': message})
                
                # Display error message
                messages.error(request, 'There was an error sending your message. Please try again.')
    else:
        form = ContactForm()

    return render(request, 'home/index.html', {'form': form, 'recent_posts': recent_posts})



def about(request):
    
    return render(request, 'home/about.html')

def programs(request):
    
    return render(request, 'home/programs.html')

def add_blog_post(request):
    if request.method == 'POST':
        form = BlogPostForm(request.POST, request.FILES)  # Include request.FILES
        if form.is_valid():
            form.save()
            messages.success(request, 'Blog post created successfully!')
            return redirect('home:index')  # Redirect to the index page after successful submission
        else:
            messages.error(request, 'Error creating blog post. Please check the form.')
    else:
        form = BlogPostForm()
    return render(request, 'home/add_blog_post.html', {'form': form})
