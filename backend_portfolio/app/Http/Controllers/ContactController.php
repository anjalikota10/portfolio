<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\contact;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return contact::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fname=$request->get('fname');
        $lname=$request->get('lname');
        $email=$request->get('email');
        $msg=$request->get('msg');
        
        $contact=new contact([
            'fname' => $fname,
            'lname' => $lname,
            'email' => $email,
            'msg' => $msg
        ]);
        $contact->save();

        return response()->json(['message' => 'Registration successful!']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $fname=$request->get('fname');
        $lname=$request->get('lname');
        $email=$request->get('email');
        $msg=$request->get('msg');

        $contact=contact::find($id);
        $contact->fname=$fname;
        $contact->lname=$lname;
        $contact->email=$email;
        $contact->msg=$msg;

        $contact->update();
        return response()->json(['message' => 'Contact updated successfully!']);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact = Contact::find($id);
    
        if (!$contact) {
            return response()->json(['error' => 'Contact not found'], 404);
        }
    
        $contact->delete();
    
        return response()->json(['message' => 'Contact deleted successfully']);
    }
    
}
