<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class studentcontroller extends Controller
{
    public function create(Request $request){
        $student = Student::create([
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "email" => $request->email,
            "password" => $request->password
        ]);

        return $student;
    }

    public function show(Request $request){
        $student = Student::where('email','=', $request->name)->get();

        return $student;
    }

    public function update(Request $request){
        Student::where('id','=', $request->id)->update([
            "first_name" => $request->first_name,
            "last_name" => $request->last_name,
            "email" => $request->email,
            "password" => $request->password
        ]);

        return response()->json([
            'message' => 'success'
        ]);
    }

    public function delete($id){
        Student::where('id','=', $id)->delete();

        return response()->json([
            'message' => 'success'
        ]);
    }
}


