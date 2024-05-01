<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;



class studentcontroller extends Controller
{
    function showstu(Request $request){
        $student = Student::where("email" , "=" , $request -> email) ->first();
        if($student){
            if ($request->password === $student->password)
            {
                return $student;
            }
        }
    }
      
    // }
    // public function create(Request $request){
    //     $student = Student::create([
    //         "first_name" => $request->first_name,
    //         "last_name" => $request->last_name,
    //         "email" => $request->email,
    //         "password" => $request->password
    //     ]);

    //     return $student;
    // }

    // public function show(Request $request){
    //     $student = Student::where("email","=", $request->name)->get();

    //     return $student;
    // }

    // public function update(Request $request){
    //     Student::where("id","=", $request->id)->update([
    //         "first_name" => $request->first_name,
    //         "last_name" => $request->last_name,
    //         "email" => $request->email,
    //         "password" => $request->password
    //     ]);

    //     return response()->json([
    //         "message" => "success"
    //     ]);
    // }

    // public function delete($id){
    //     Student::where("id","=", $id)->delete();

    //     return response()->json([
    //         "message" => "success"
    //     ]);
    // }

    
    public function signup(Request $request){
        $student = Student::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password
            // "gender" => $request->gender,
            // "birth_date" => $request->birth_date,
            // "dept_id" => $request->dept_id,
            // "GPA" => $request->GPA,
            // "years_of_study" => $request->years_of_study,
            // "credits" => $request->credits
        ]);
        return $student;
    }

    public function update(Request $request){
        Student::where('id','=', $request->id)->update([
            "id" => $request->id,
            "name" => $request->name,
            "email" => $request->email,
            "gender" => $request->gender,
            "birth_date" => $request->birth_date,
            "dept_id" => $request->dept_id,
            "GPA" => $request->GPA,
            "years_of_study" => $request->years_of_study,
            "credits" => $request->credits
        ]);
        $student = Student::find($request->id);

        return $student;
    }

    function showdash($id){
        $student = Student::where("id" , "=" , $id) ->get();
        return $student;
    }

    function showstugen($male){
        $student = Student::where("gender" , "=" , $male) ->get();
        return $student;
    }
}